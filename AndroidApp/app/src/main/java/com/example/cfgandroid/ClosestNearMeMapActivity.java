package com.example.cfgandroid;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.fragment.app.FragmentActivity;

import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.os.Bundle;
import android.widget.Toast;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

public class ClosestNearMeMapActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    FusedLocationProviderClient fusedLocationProviderClient;

    FirebaseFirestore db = FirebaseFirestore.getInstance();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_closest_near_me_map);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }

    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(final GoogleMap googleMap) {
        mMap = googleMap;
        fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(this);
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        fusedLocationProviderClient.getLastLocation().addOnCompleteListener(new OnCompleteListener<Location>() {
            @Override
            public void onComplete(@NonNull Task<Location> task) {
                Location location=task.getResult();
                if(location!=null)
                {
                    Geocoder geocoder=new Geocoder(ClosestNearMeMapActivity.this, Locale.getDefault());
                    try {
                        List<Address> addresses=geocoder.getFromLocation(location.getLatitude(),location.getLongitude(),1);
                        Toast.makeText(ClosestNearMeMapActivity.this,String.valueOf(addresses.get(0).getLatitude()),Toast.LENGTH_LONG).show();
                        Toast.makeText(ClosestNearMeMapActivity.this,String.valueOf(addresses.get(0).getLongitude()),Toast.LENGTH_LONG).show();
                        double val=addresses.get(0).getLatitude();
                        double val2=addresses.get(0).getLongitude();
                        setMap(val,val2,googleMap);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }

                }



            }
        });

        // Add a marker in Sydney and move the camera


    }
    void setMap(final double val, final double val2, GoogleMap googleMap)
    {
        HashMap<String,Object> map=new HashMap<>();
        db.collection("fpo").get().addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
        double min=Double.MAX_VALUE;
        String str="";
            @Override
            public void onSuccess(QuerySnapshot queryDocumentSnapshots) {

                for(QueryDocumentSnapshot queryDocumentSnapshot:queryDocumentSnapshots) {
                    double lat=Double.parseDouble(String.valueOf(queryDocumentSnapshot.get("latitude")));
                    double longi=Double.parseDouble(String.valueOf(queryDocumentSnapshot.get("longitude")));
                    LatLng location = new LatLng(lat, longi);
                    if(Math.abs(val-lat)+Math.abs(val2-longi)<min)
                    {
                        min=Math.abs(val-lat)+Math.abs(val2-longi);
                        str=String.valueOf(queryDocumentSnapshot.get("name"));
                    }
                    mMap.addMarker(new MarkerOptions().position(location).title(String.valueOf(queryDocumentSnapshot.get("name"))));
                }
                LatLng currentLocation=new LatLng(val,val2);
                mMap.addMarker(new MarkerOptions().position(currentLocation).title(String.valueOf("My Location")));
                Toast.makeText(ClosestNearMeMapActivity.this,"The closest FPO near you is "+str,Toast.LENGTH_LONG).show();
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(@NonNull Exception e) {

            }
        });
        LatLng currentLocation=new LatLng(val,val2);
        mMap.addMarker(new MarkerOptions().position(currentLocation).title(String.valueOf("My Location")));
        mMap.moveCamera(CameraUpdateFactory.newLatLng(currentLocation));
        mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(new LatLng(val,val2), 12.0f));


    }

}
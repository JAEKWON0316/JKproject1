package com.example.newproject;

import android.app.Activity;
import android.os.Bundle;
import android.os.SystemClock;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.Chronometer;
import android.widget.RatingBar;
import android.widget.TextView;

import androidx.annotation.Nullable;

public class FourthActivity extends Activity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.fourth);

        final Button btnAvg = (Button) findViewById(R.id.BtnAvg);
        final Button btnstart = (Button) findViewById(R.id.BtnStart);
        final Button btnstop = (Button) findViewById(R.id.BtnStop);
        final Button btnreset = (Button) findViewById(R.id.BtnReset);
        final RatingBar rating1 = (RatingBar) findViewById(R.id.ratingBar);
        final RatingBar rating2 = (RatingBar) findViewById(R.id.ratingBar2);
        final RatingBar rating3 = (RatingBar) findViewById(R.id.ratingBar3);
        final TextView textResult = (TextView) findViewById(R.id.AvgView);
        final Chronometer chrono = (Chronometer) findViewById(R.id.chronometer);

        btnAvg.setOnTouchListener(new View.OnTouchListener() {
            public boolean onTouch(View arg0, MotionEvent arg1){
                float num1 = rating1.getRating();
                float num2 = rating2.getRating();
                float num3 = rating3.getRating();

                float result = (num1 + num2 + num3) / 3;

                textResult.setText("평점 : " + result);

                return false;
            }
        });

        btnstart.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {

                chrono.start();
            }
        });
        btnstop.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {

                chrono.stop();
            }
        });
        btnreset.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                chrono.setBase(SystemClock.elapsedRealtime());

            }
        });


    }
}
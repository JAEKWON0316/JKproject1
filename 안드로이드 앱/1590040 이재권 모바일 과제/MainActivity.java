package com.example.newproject;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button chest = (Button) findViewById(R.id.chest);
        chest.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                Intent intent = new Intent(getApplicationContext(), SecondActivity.class);
                startActivity(intent); // 새로운 액티비티를 화면에 출력
            }
        });
        Button shoulder = (Button) findViewById(R.id.shoulder);
        shoulder.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                Intent intent = new Intent(getApplicationContext(), ThirdActivity.class);
                startActivity(intent); // 새로운 액티비티를 화면에 출력
            }
        });
        Button back = (Button) findViewById(R.id.back);
        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                Intent intent = new Intent(getApplicationContext(), FourthActivity.class);
                startActivity(intent); // 새로운 액티비티를 화면에 출력
            }
        });
        Button leg = (Button) findViewById(R.id.leg);
        leg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                Intent intent = new Intent(getApplicationContext(), FifthActivity.class);
                startActivity(intent); // 새로운 액티비티를 화면에 출력
            }
        });
    }
}
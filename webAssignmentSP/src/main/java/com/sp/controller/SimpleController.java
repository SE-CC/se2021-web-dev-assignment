package com.sp.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;
import com.sp.model.EmployeeBody;
import com.sp.model.WraType;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*" )
@RestController
public class SimpleController {
    @GetMapping("api/data")
    public WraType<ArrayList<EmployeeBody>> getRequest() throws IOException {
        File file = new File("JsonFile//data.json");
        FileReader reader = new FileReader(file);//定义一个fileReader对象，用来初始化BufferedReader
        BufferedReader bReader = new BufferedReader(reader);//new一个BufferedReader对象，将文件内容读取到缓存
        StringBuilder sb = new StringBuilder();//定义一个字符串缓存，将字符串存放缓存中
        String s = "";
        while ((s =bReader.readLine()) != null) {//逐行读取文件内容，不读取换行符和末尾的空格
            sb.append(s + "\n");//将读取的字符串添加换行符后累加存放在缓存中
            System.out.println(s);
        }
        bReader.close();
        String str = sb.toString();

        JsonParser parser = new JsonParser();
        JsonArray jsonArray = parser.parse(str).getAsJsonArray();

        Gson gson = new Gson();
        ArrayList<EmployeeBody> employeeBodyArrayList = new ArrayList<>();

        for(JsonElement item : jsonArray){
            EmployeeBody eb = gson.fromJson(item, EmployeeBody.class);
            employeeBodyArrayList.add(eb);
        }
//        List<EmployeeBody> employeeBodyList = gson.fromJson("JsonFile//data.json",
//                new TypeToken<List<EmployeeBody>>(){}.getType());
        return new WraType<ArrayList<EmployeeBody>>(employeeBodyArrayList);
    }

    @PostMapping("api/data")
    public WraType<String> postRequest(@RequestBody EmployeeBody em) throws IOException {

        File file = new File("JsonFile//data.json");
        FileReader reader = new FileReader(file);//定义一个fileReader对象，用来初始化BufferedReader
        BufferedReader bReader = new BufferedReader(reader);//new一个BufferedReader对象，将文件内容读取到缓存
        StringBuilder sb = new StringBuilder();//定义一个字符串缓存，将字符串存放缓存中
        String s = "";
        while ((s =bReader.readLine()) != null) {//逐行读取文件内容，不读取换行符和末尾的空格
            sb.append(s + "\n");//将读取的字符串添加换行符后累加存放在缓存中
            System.out.println(s);
        }
        bReader.close();
        String str = sb.toString();

        OutputStreamWriter osw = new OutputStreamWriter(
                new FileOutputStream("JsonFile//data.json"),
                "UTF-8");
        osw.write("[");




        JsonParser parser = new JsonParser();
        JsonArray jsonArray = parser.parse(str).getAsJsonArray();

        Gson gson = new Gson();
        ArrayList<EmployeeBody> employeeBodyArrayList = new ArrayList<>();

        for(JsonElement item : jsonArray){
            EmployeeBody eb = gson.fromJson(item, EmployeeBody.class);
            JSONObject preObj = (JSONObject) JSONObject.toJSON(eb);
            osw.write(preObj.toString());
            osw.write(",");
        }

//        FileWriter fw = new FileWriter("JsonFile//data.json", true);
//        fw.write("\b");
//        fw.write(",");
        JSONObject obj = (JSONObject) JSONObject.toJSON(em);
        osw.write(obj.toString());
        osw.write("]");
        osw.flush();
        osw.close();
//        fw.write(obj.toString());
//        fw.write("]");
//        fw.close();
        return new WraType<String>("success");
    }
}

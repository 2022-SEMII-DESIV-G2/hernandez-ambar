package com.isaquinn;
import static spark.Spark.*;

import org.json.JSONObject;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {

        Pyramids objPys= new Pyramids();  

        options("/*",
        (request, response) -> {

            String accessControlRequestHeaders = request
                    .headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                        accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request
                    .headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods",
                        accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        
        get("/pyramids", (req, res) -> {
            res.type("application/json");
            JSONObject jsonobj = new JSONObject(objPys);
            return jsonobj;
        });
        
        get("/pyramids/:id", (req, res) -> {
            res.type("application/json");
            JSONObject jsonobj = new JSONObject(objPys.getPyramids().get(Integer.parseInt(req.params(":id")) - 1));
            return jsonobj;
        });

        post("/pyramids", (req, res) -> {
            res.type("application/json");
            Pyramid py = new Pyramid();
            JSONObject body = new JSONObject(req.body());
            py.setId(objPys.getPyramids().size()+1  );
            py.setName(body.getString("name"));
            py.setFloors(body.getString("floors"));
            objPys.addPyramid(py);
            JSONObject jsonobj = new JSONObject(objPys);
            return jsonobj;
        });
    }
}

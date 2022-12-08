package com.isaquinn;

import java.util.ArrayList;

public class Pyramids {
    ArrayList<Pyramid> pys = new ArrayList<Pyramid>();
    
    public ArrayList<Pyramid> getPyramids(){
        return pys;
    }

    public void addPyramid(Pyramid py){
        pys.add(py);
    }
}

package com.example.jianshudemo.api;

import com.example.jianshudemo.pojo.NoteParam;
import com.example.jianshudemo.util.JsonResult;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("api")
public class NoteApi {

    //不传参方法
    @ApiOperation(value = "查询所有角色列表", notes = "查询所有角色列表")
    @RequestMapping(value="note",method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<JsonResult> getString(){
        JsonResult r = new JsonResult();
        try {

            List<NoteParam>  noteParamslist = new ArrayList<>();
            NoteParam sData1 = null;
            for(int i=0;i<5;i++){
                sData1 = new NoteParam();
                sData1.setId(i);
                sData1.setContent("aaaabbb"+i);
                sData1.setTitle("a"+i);
                noteParamslist.add(sData1);
            }
            r.setCode(200);
            r.setMsg("success");
            r.setData(noteParamslist);
            r.setSuccess(true);
        } catch (Exception e) {
            r.setCode(500);
            r.setData(e.getClass().getName() + ":" + e.getMessage());
            r.setMsg("失败");
            r.setSuccess(false);
            e.printStackTrace();
        }
        return ResponseEntity.ok(r);
    }


    //传参方法
    @ApiOperation(value = "传参方法，query为后缀参数，header为请求头参数", notes = "传参方法")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "roleid", value = "roleid", required = true, dataType = "String",paramType = "query"),
            @ApiImplicitParam(name = "token", value = "用户token", required = true, dataType = "String",paramType = "header")
    })
    @RequestMapping(value="testparam",method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<JsonResult> testParam(@RequestParam("roleid") String roleid,  HttpServletRequest request){
        String token = request.getHeader("token");
        JsonResult r = new JsonResult();
        try {
            r.setCode(200);
            r.setMsg("success");
            r.setData(roleid+"  "+token);
            r.setSuccess(true);
        } catch (Exception e) {
            r.setCode(500);
            r.setData(e.getClass().getName() + ":" + e.getMessage());
            r.setMsg("failed");
            r.setSuccess(false);
            e.printStackTrace();
        }
        return ResponseEntity.ok(r);
    }

    //传参方法
    @ApiOperation(value = "传参方法", notes = "传参方法")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "id", required = true, dataType = "Integer",paramType = "query")
    })
    @RequestMapping(value="detail",method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<JsonResult> getDetail(@RequestParam("id") Integer id,  HttpServletRequest request){

        JsonResult r = new JsonResult();
        try {
            NoteParam sData = new NoteParam();
            sData.setId(id);
            sData.setContent("aaaabbb"+id);
            sData.setTitle("a"+id);

            r.setCode(200);
            r.setMsg("success");
            r.setData(sData);
            r.setSuccess(true);
        } catch (Exception e) {
            r.setCode(500);
            r.setData(e.getClass().getName() + ":" + e.getMessage());
            r.setMsg("failed");
            r.setSuccess(false);
            e.printStackTrace();
        }
        return ResponseEntity.ok(r);
    }
}

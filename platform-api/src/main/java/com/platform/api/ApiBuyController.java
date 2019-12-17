package com.platform.api;

import com.alibaba.fastjson.JSONObject;
import com.platform.annotation.LoginUser;
import com.platform.cache.J2CacheUtils;
import com.platform.entity.BuMealVo;
import com.platform.entity.BuyGoodsVo;
import com.platform.entity.UserVo;
import com.platform.util.ApiBaseAction;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "商品购买")
@RestController
@RequestMapping("/api/buy")
public class ApiBuyController extends ApiBaseAction {

    @ApiOperation(value = "商品添加")
    @PostMapping("/add")
    public Object addBuy(@LoginUser UserVo loginUser) {
        JSONObject jsonParam = getJsonRequest();
        Integer goodsId = jsonParam.getInteger("goodsId");
        Integer Specificationid = jsonParam.getInteger("Specificationid");
        Integer number = jsonParam.getInteger("number");
        BuyGoodsVo goodsVo = new BuyGoodsVo();
        goodsVo.setGoodsId(goodsId);
        goodsVo.setSpecificationid(Specificationid);
        goodsVo.setNumber(number);
        J2CacheUtils.put(J2CacheUtils.SHOP_CACHE_NAME, "goods" + loginUser.getUserId() + "", goodsVo);
        return toResponsMsgSuccess("添加成功");
    }

    @ApiOperation(value = "餐单商品添加")
    @PostMapping("/Mealadd")
    public Object mealaddBuy(@LoginUser UserVo loginUser){
        JSONObject jsonParam = getJsonRequest();
        Integer stroeid=jsonParam.getInteger("stroeid");
        Integer number=jsonParam.getInteger("number");
        Integer mealid=jsonParam.getInteger("mealid");
        BuMealVo buMealVo=new BuMealVo();
        buMealVo.setStroeid(stroeid);
        buMealVo.setNumber(number);
        buMealVo.setMealid(mealid);
        J2CacheUtils.put(J2CacheUtils.SHOP_CACHE_NAME, "mealname" + loginUser.getUserId() + "", buMealVo);
        return toResponsMsgSuccess("添加成功");
    }
}

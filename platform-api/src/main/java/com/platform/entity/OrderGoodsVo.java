package com.platform.entity;

import lombok.Getter;
import lombok.Setter;
import org.joda.time.DateTime;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;


/**
 * @author lipengjun
 * @email 939961241@qq.com
 * @date 2017-08-15 08:03:40
 */
public class OrderGoodsVo implements Serializable {
    private static final long serialVersionUID = 1L;

    //主键
    private Integer id;
    //订单Id
    private Integer order_id;
    //商品id
    private Integer goods_id;
    //商品名称
    private String goods_name;
    //商品序列号
    private String goods_sn;
    //产品Id
    private Integer product_id;
    //商品数量
    private Integer number;
    //市场价
    private BigDecimal market_price;
    //零售价格
    private BigDecimal retail_price;
    //商品规格详情
    private String goods_specifition_name_value;
    //虚拟商品
    private Integer is_real;
    //商品规格Ids
    private String goods_specifition_ids;
    //图片链接
    private String list_pic_url;
    private Integer supplier_id;
    private Integer dept_id;
    @Setter
    @Getter
    private String batch_id;
    @Setter
    @Getter
    private String yqm;
    @Setter
    @Getter
    private Integer attribute_category;
    //供应商名称

    private String supplierName;
    //送达时间

    private String deliery_time;
    //人数
    private  Integer population;
    //天数
    private  Integer fate;
    //备注
    private  String reamarks;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Integer order_id) {
        this.order_id = order_id;
    }

    public Integer getGoods_id() {
        return goods_id;
    }

    public void setGoods_id(Integer goods_id) {
        this.goods_id = goods_id;
    }

    public String getGoods_name() {
        return goods_name;
    }

    public void setGoods_name(String goods_name) {
        this.goods_name = goods_name;
    }

    public String getGoods_sn() {
        return goods_sn;
    }

    public void setGoods_sn(String goods_sn) {
        this.goods_sn = goods_sn;
    }

    public Integer getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Integer product_id) {
        this.product_id = product_id;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public BigDecimal getMarket_price() {
        return market_price;
    }

    public void setMarket_price(BigDecimal market_price) {
        this.market_price = market_price;
    }

    public BigDecimal getRetail_price() {
        return retail_price;
    }

    public void setRetail_price(BigDecimal retail_price) {
        this.retail_price = retail_price;
    }

    public String getGoods_specifition_name_value() {
        return goods_specifition_name_value;
    }

    public void setGoods_specifition_name_value(String goods_specifition_name_value) {
        this.goods_specifition_name_value = goods_specifition_name_value;
    }

    public Integer getIs_real() {
        return is_real;
    }

    public void setIs_real(Integer is_real) {
        this.is_real = is_real;
    }

    public String getGoods_specifition_ids() {
        return goods_specifition_ids;
    }

    public void setGoods_specifition_ids(String goods_specifition_ids) {
        this.goods_specifition_ids = goods_specifition_ids;
    }

    public String getList_pic_url() {
        return list_pic_url;
    }

    public void setList_pic_url(String list_pic_url) {
        this.list_pic_url = list_pic_url;
    }

    public Integer getSupplier_id() {
        return supplier_id;
    }

    public void setSupplier_id(Integer supplier_id) {
        this.supplier_id = supplier_id;
    }

    public Integer getDept_id() {
        return dept_id;
    }

    public void setDept_id(Integer dept_id) {
        this.dept_id = dept_id;
    }



    public Integer getPopulation() {
        return population;
    }

    public void setPopulation(Integer population) {
        this.population = population;
    }

    public Integer getFate() {
        return fate;
    }

    public void setFate(Integer fate) {
        this.fate = fate;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public String getDeliery_time() {
        return deliery_time;
    }

    public void setDeliery_time(String deliery_time) {
        this.deliery_time = deliery_time;
    }

    public String getReamarks() {
        return reamarks;
    }

    public void setReamarks(String reamarks) {
        this.reamarks = reamarks;
    }
}

var RYO= cc.Sprite.extend({
    id   : 'RYO',
    fullname : 'Ryo Sakazaki',
    name : '坂崎良',
    des  : '极限流道场的门下生，有着「无敌之龙」的称号，与Robert Garcia合称“龙虎”',
    pos  : 'L',//L--左边，R--右边
    backpose : null,//角色选择页面 sprite--背景人物
    mandes : null,//角色选择页面 sprite--人物信息
    stance : null,//角色选择页面 sprite--人物展示台动作
    stanceparam : {'w':150,'h':235,'p':cc.p(-150,-10),'fc':24},
    fightparam : {'stance' : cc.p(-230,-230)},
    body : {},
    init : function(){
        var flag = false;
        if(this._super){
            this.initBackPose();
            flag = true;
        }
        return flag;
    },
    initBackPose : function(){
        this.backpose = cc.Sprite.create(backposes[this.id.toLowerCase()]);
        this.backpose.setScale(0.8);
        this.backpose.setPosition(-385,-105);
    }
});
RYO.create = function(){
    var sg = new RYO();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
}

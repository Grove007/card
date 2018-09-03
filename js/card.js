  //失去焦点时，提示验证错误消息
    phone.onblur = function(){
      if(this.validity.valueMissing){
        alert('请输入正确的手机号码！');
        this.setCustomValidity('请输入正确的手机号码！');
      }else {
        this.setCustomValidity(''); //取消自定义错误消息
      }
    }
 <script src="js/card.js"></script>
     //失去焦点时，验证验证码
    mess.onblur = function(){
      if(this.validity.tooShirt){
        alert('验证码长度不能小于4！');
        this.setCustomValidity('验证码长度不能小于4！')
      }else if(this.validity.tooLong){
        alert('验证码长度不能大于6！');
        this.setCustomValidity('验证码长度不能大于6！')
      }else if(this.validity.valueMissing){
        alert('尚未输入验证码！');
        this.setCustomValidity('尚未输入验证码！')
      }else {
        this.setCustomValidity('');//取消自定义错误消息
      }
    }




       
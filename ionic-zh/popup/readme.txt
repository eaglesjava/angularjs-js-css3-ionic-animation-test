方法
	show(可选)
	显示一个复杂的对话框。 这是一个所有弹窗的主体显示功能。

	一个带有按钮组的复杂弹窗，每个按钮带有一个文本 和 类型字段，此外还有一个 onTap功能。
	当点击弹窗上的相关按钮，会触发onTap函数，默认会关闭弹窗，处理弹窗的返回值。
	如果你想阻止默认动作，点击按钮保持打开弹窗，当点击一个事件时，触发event.preventDefault()。
	详见下文。

参数	类型	详情
options	object	
新弹窗的选项的表现形式：

{
  title: '',       // String. 弹窗的标题。
  subTitle: '',    // String (可选)。弹窗的子标题。
  template: '',    // String (可选)。放在弹窗body内的html模板。
  templateUrl: '', // String (可选)。在弹窗body内的html模板的URL。
  scope: null,     // Scope (可选)。一个链接到弹窗内容的scope（作用域）。
  buttons: [{      //Array[Object] (可选)。放在弹窗footer内的按钮。
    text: 'Cancel',
    type: 'button-default',
    onTap: function(e) {
      // 当点击时，e.preventDefault() 会阻止弹窗关闭。
      e.preventDefault();
    }
  }, {
    text: 'OK',
    type: 'button-positive',
    onTap: function(e) {
      // 返回的值会导致处理给定的值。
      return scope.data.response;
    }
  }]
}
返回: object 当关闭弹窗时，处理一个promise。有一个附加的关闭函数，用于利用程序关闭弹窗。
alert(可选)
显示一个带有一段信息和一个用户可以点击关闭弹窗的按钮的简单提示弹窗。

参数	类型	Details
options	object	
显示提示的选项形式：

{
  title: '', // String. 弹窗的标题。
  subTitle: '', // String (可选)。弹窗的子标题。
  template: '', // String (可选)。放在弹窗body内的html模板。
  templateUrl: '', // String (可选)。 放在弹窗body内的html模板的URL。
  okText: '', // String (默认: 'OK')。OK按钮的文字。
  okType: '', // String (默认: 'button-positive')。OK按钮的类型。
}
返回: object 当弹窗关闭时，处理的一个 promise。有一个额外的关闭函数，可以被带有任何给定的值的关闭程序调用。
confirm(可选)
显示一个简单的带有一个取消和OK按钮的对话框弹窗。

如果用户点击OK按钮，就设置promise为true，如果用户点击取消按钮则为false。

参数	类型	详情
options	object	
显示对话框弹窗选项的形式：

{
  title: '', // String. 弹窗标题。
  subTitle: '', // String (可选)。弹窗的副标题。
  template: '', // String (可选)。放在弹窗body内的html模板。
  templateUrl: '', // String (可选)。放在弹窗body内的一个html模板的URL。
  cancelText: '', // String (默认: 'Cancel')。一个取消按钮的文字。
  cancelType: '', // String (默认: 'button-default')。取消按钮的类型。
  okText: '', // String (默认: 'OK')。OK按钮的文字。
  okType: '', // String (默认: 'button-positive')。OK按钮的类型。
}
返回: object 当关闭对话框时，处理的一个promise。当弹窗关闭时，处理的一个 promise。有一个额外的关闭函数，可以被带有任何给定的值的关闭程序调用。
prompt(可选)
显示一个简单的提示弹窗，带有一个input， OK 按钮，和取消按钮。如果用户点击OK，就设置promise的值，如果用户点击取消，则值为未定义。

 $ionicPopup.prompt({
   title: 'Password Check',
   template: 'Enter your secret password',
   inputType: 'password',
   inputPlaceholder: 'Your password'
 }).then(function(res) {
   console.log('Your password is', res);
 });
参数	类型	详情
options	object	
显示的提示弹窗选项的形式：

{
  title: '', // String. 弹窗的标题。
  subTitle: '', // String (可选)。弹窗的副标题。
  template: '', // String (可选)。放在弹窗body内的html模板。
  templateUrl: '', // String (可选)。放在弹窗body内的html模板的URL。
  inputType: // String (默认: 'text')。input的类型。
  inputPlaceholder: // String (默认: '')。input的 placeholder。
  cancelText: // String (默认: 'Cancel')。取消按钮的文字。
  cancelType: // String (默认: 'button-default')。取消按钮的类型。
  okText: // String (默认: 'OK')。OK按钮的文字。
  okType: // String (默认: 'button-positive')。OK按钮的类型。
}
返回: object 当关闭对话框时，处理的一个promise。当弹窗关闭时，处理的一个 promise。有一个额外的关闭函数，可以被带有任何给定的值的关闭程序调用。




















var Styles = require("./styles");
var Router = require("./route");

var Footer = React.createClass({
	mixins:[Router],
	render: function(){
		return (
			<div style={Styles.footer}>
				<div onClick={this.router} href="/index" style={Styles.footerDiv}>
					<div className="iconfont">&#xe729;</div>首页</div>
				<div onClick={this.router} href="/classify" style={Styles.footerDiv}>
					<div className="iconfont">&#xe610;</div>分类</div>
				<div onClick={this.router} href="/cart" style={Styles.footerDiv}>
					<div className="iconfont">&#xe611;</div>购物车</div>
				<div onClick={this.router} href="/center" style={Styles.footerDiv}>
					<div className="iconfont">&#xe653;</div>个人中心</div>
			</div>
		)
	}
});
module.exports = Footer;
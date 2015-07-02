
function getAllCityList() {
	var a = $(".city-div");
	if (0 != $("#city-list-template").length) {
		var b = _.template($("#city-list-template").html());
		$.getJSON("/entry/getAllCityList", function(c) {
			a.html(b(c)), bindCityClick(), $(".city-div>div:first-child").trigger("tap"), $(".city-div>div:first-child").addClass("active")
		})
	}
}

function bindCityClick() {
	var a = ($(".city-div"), $(".city-div .city"));
	a.on("tap", function() {
		var b = $(this),
			c = b.data("city_id"),
			d = $(".zone-div");
		if (0 != $("#zone-site-list-template").length) {
			var e = _.template($("#zone-site-list-template").html());
			a.removeClass("active"), b.addClass("active"), $("#city-" + c + "-content").show();
			var f = $(this).data("city_id");
			$.getJSON("/entry/getAllByCityId/cityId/" + f, function(a) {
				1 == a.status ? (a.city_id = f, d.html(e(a)), document.body.scrollTop = 0) : d.empty()
			})
		}
	})
}

function bindSearch() {
	var a;
	$("#search").on("input", function() {
		clearTimeout(a), a = setTimeout("getSearchResult();", 500)
	})
}

function getSearchResult() {
	var a = $("#search").val(),
		b = $("#select-school-result"),
		c = _.template($("#select-school-result-template").html()),
		d = $("#search");
	return 0 == a.length ? (b.hide(), !1) : void $.getJSON("/entry/getSchoolByName", {
		schoolname: a
	}, function(e) {
		1 == e.status ? d.val() == a && b.html(c(e)) : b.html("<ul><li><span>没有匹配结果</span></li></ul>"), 0 != d.val().length && b.show()
	})
}

$(function() {
	getAllCityList(), bindSearch()
});

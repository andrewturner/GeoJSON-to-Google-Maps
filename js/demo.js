var map;
var currentFeature_or_Features;

var geojson_Point = {
	type: "Point",
	coordinates: [-80.66252, 35.04267]
};
		
var geojson_GeometryCollection = {
	type: "GeometryCollection",
	geometriess: [
		{
			type: "Point",
			coordinates: [-80.66256, 35.04271]
		},{
			type: "Point",
			coordinates: [-80.66248, 35.04263]
		}
	]
};
		
		var geojson_LineString = {
			type: "LineString",
			coordinates: [
				[-80.661983228058659, 35.042968081213758],
				[-80.662076494242413, 35.042749414542243],
				[-80.662196794397431, 35.042626481357232],
				[-80.664238981504525, 35.041175532632963]
			]
		};
		
		var geojson_Polygon = {
			type: "Polygon",
			coordinates: [
				[
					[-80.662120612605904,35.042875219905184],
					[-80.662141716053014,35.042832740965068],
					[-80.662171938563816,35.042789546962993],
					[-80.662209174653029,35.042750233165179],
					[-80.662250709107454,35.042716920859959],
					[-80.662627586829899,35.043072078075667],
					[-80.662595574310288,35.043162322407341],
					[-80.662142312824884,35.043015448098977],
					[-80.66214539632351,35.042970839922489],
					[-80.662117972448982,35.042908385949438],
					[-80.662120612605904,35.042875219905184]
				]
			]
		};
		
		var geojson_MultiPolygon = {
			type: "MultiPolygon",
			coordinates: [
				[
					[
						[-80.661917125299155,35.042245264120233],
						[-80.662257428469147,35.042566288770765],
						[-80.662116500253873,35.042670715828088],
						[-80.661715367137106,35.042389935257198],
						[-80.661917125299155,35.042245264120233]
					]
				],[
					[
						[-80.661547137566686,35.042510563404129],
						[-80.661677171806787,35.042417322902836],
						[-80.662084018102888,35.042702102858307],
						[-80.662039854197829,35.042756211162953],
						[-80.662002555672572,35.042820528162387],
						[-80.661457640151127,35.042647387136952],
						[-80.661547137566686,35.042510563404129]
					]
				]
			]
		};
		
		var roadStyle = {
			strokeColor: "#FFFF00",
			strokeWeight: 7,
			strokeOpacity: 0.75
		};
		
		var addressStyle = {
			icon: "img/marker-house.png"
		};
		
		var parcelStyle = {
			strokeColor: "#FF7800",
			strokeOpacity: 1,
			strokeWeight: 2,
			fillColor: "#46461F",
			fillOpacity: 0.25
		};

$(function(){
	alert('got here');
	map = new google.maps.Map(document.getElementById('map'),{
		zoom: 17,
		center: new google.maps.LatLng(35.042248, -80.662319),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
});

function clearMap(){
	if (!currentFeature_or_Features)
		return;
	if (currentFeature_or_Features.length){
		for (var i = 0; i < currentFeature_or_Features.length; i++){
			currentFeature_or_Features[i].setMap(null);
		}
	}else{
		currentFeature_or_Features.setMap(null);
	}
}
function showFeature(geojson, style){
	clearMap();
	currentFeature_or_Features = new GeoJSON(geojson, style || null);
	if (currentFeature_or_Features.type && currentFeature_or_Features.type == "Error"){
		document.getElementById("put_geojson_string_here").value = currentFeature_or_Features.message;
		return;
	}
	if (currentFeature_or_Features.length){
		for (var i = 0; i < currentFeature_or_Features.length; i++){
			currentFeature_or_Features[i].setMap(map);
		}
	}else{
		currentFeature_or_Features.setMap(map)
	}
			
	document.getElementById("put_geojson_string_here").value = JSON.stringify(geojson);
}
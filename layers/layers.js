var wms_layers = [];

        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });var format_County_Parcels_1 = new ol.format.GeoJSON();
var features_County_Parcels_1 = format_County_Parcels_1.readFeatures(json_County_Parcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_Parcels_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_County_Parcels_1.addFeatures(features_County_Parcels_1);var lyr_County_Parcels_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_County_Parcels_1, 
                style: style_County_Parcels_1,
                title: '<img src="styles/legend/County_Parcels_1.png" /> County_Parcels'
            });var format_County_Boundary_2 = new ol.format.GeoJSON();
var features_County_Boundary_2 = format_County_Boundary_2.readFeatures(json_County_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_Boundary_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_County_Boundary_2.addFeatures(features_County_Boundary_2);var lyr_County_Boundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_County_Boundary_2, 
                style: style_County_Boundary_2,
                title: '<img src="styles/legend/County_Boundary_2.png" /> County_Boundary'
            });var format_Intersect_Parcels_3 = new ol.format.GeoJSON();
var features_Intersect_Parcels_3 = format_Intersect_Parcels_3.readFeatures(json_Intersect_Parcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersect_Parcels_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Intersect_Parcels_3.addFeatures(features_Intersect_Parcels_3);var lyr_Intersect_Parcels_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intersect_Parcels_3, 
                style: style_Intersect_Parcels_3,
                title: '<img src="styles/legend/Intersect_Parcels_3.png" /> Intersect_Parcels'
            });var format_Research_Parcels_4 = new ol.format.GeoJSON();
var features_Research_Parcels_4 = format_Research_Parcels_4.readFeatures(json_Research_Parcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Research_Parcels_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Research_Parcels_4.addFeatures(features_Research_Parcels_4);var lyr_Research_Parcels_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Research_Parcels_4, 
                style: style_Research_Parcels_4,
                title: '<img src="styles/legend/Research_Parcels_4.png" /> Research_Parcels'
            });var format_BCS_5 = new ol.format.GeoJSON();
var features_BCS_5 = format_BCS_5.readFeatures(json_BCS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BCS_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_BCS_5.addFeatures(features_BCS_5);var lyr_BCS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BCS_5, 
                style: style_BCS_5,
                title: '<img src="styles/legend/BCS_5.png" /> BCS'
            });var format_Woods_Corner_MR_6 = new ol.format.GeoJSON();
var features_Woods_Corner_MR_6 = format_Woods_Corner_MR_6.readFeatures(json_Woods_Corner_MR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Woods_Corner_MR_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Woods_Corner_MR_6.addFeatures(features_Woods_Corner_MR_6);var lyr_Woods_Corner_MR_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Woods_Corner_MR_6, 
                style: style_Woods_Corner_MR_6,
                title: '<img src="styles/legend/Woods_Corner_MR_6.png" /> Woods_Corner_MR'
            });var format_ACP_Alignment_2016_7 = new ol.format.GeoJSON();
var features_ACP_Alignment_2016_7 = format_ACP_Alignment_2016_7.readFeatures(json_ACP_Alignment_2016_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACP_Alignment_2016_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ACP_Alignment_2016_7.addFeatures(features_ACP_Alignment_2016_7);var lyr_ACP_Alignment_2016_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACP_Alignment_2016_7, 
                style: style_ACP_Alignment_2016_7,
                title: '<img src="styles/legend/ACP_Alignment_2016_7.png" /> ACP_Alignment_2016'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_County_Parcels_1.setVisible(true);lyr_County_Boundary_2.setVisible(true);lyr_Intersect_Parcels_3.setVisible(true);lyr_Research_Parcels_4.setVisible(true);lyr_BCS_5.setVisible(true);lyr_Woods_Corner_MR_6.setVisible(true);lyr_ACP_Alignment_2016_7.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_County_Parcels_1,lyr_County_Boundary_2,lyr_Intersect_Parcels_3,lyr_Research_Parcels_4,lyr_BCS_5,lyr_Woods_Corner_MR_6,lyr_ACP_Alignment_2016_7];
lyr_County_Parcels_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VGIN_QPID': 'VGIN_QPID', 'FIPS': 'FIPS', 'LOCALITY': 'LOCALITY', 'PARCELID': 'PARCELID', 'PTM_ID': 'PTM_ID', 'LASTUPDATE': 'LASTUPDATE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_County_Boundary_2.set('fieldAliases', {'STCOFIPS': 'STCOFIPS', 'GNIS': 'GNIS', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'GSOURCE': 'GSOURCE', 'LADOPT': 'LADOPT', 'AREASQMI': 'AREASQMI', 'LASTUPDATE': 'LASTUPDATE', 'JURISTYPE': 'JURISTYPE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Intersect_Parcels_3.set('fieldAliases', {'VGIN_QPID': 'VGIN_QPID', 'PARCELID': 'PARCELID', });
lyr_Research_Parcels_4.set('fieldAliases', {'VGIN_QPID': 'VGIN_QPID', 'PARCELID': 'PARCELID', 'UH_join_La': 'UH_join_La', 'UH_join_ea': 'UH_join_ea', 'UH_join_he': 'UH_join_he', 'UH_join_fe': 'UH_join_fe', });
lyr_BCS_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Element': 'Element', 'Type': 'Type', 'Horsepower': 'Horsepower', 'Link': 'Link', });
lyr_Woods_Corner_MR_6.set('fieldAliases', {'name': 'name', 'owner': 'owner', 'volume': 'volume', 'use': 'use', });
lyr_ACP_Alignment_2016_7.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Length': 'Length', });
lyr_County_Parcels_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'VGIN_QPID': 'TextEdit', 'FIPS': 'TextEdit', 'LOCALITY': 'TextEdit', 'PARCELID': 'TextEdit', 'PTM_ID': 'TextEdit', 'LASTUPDATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_County_Boundary_2.set('fieldImages', {'STCOFIPS': 'TextEdit', 'GNIS': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'GSOURCE': 'TextEdit', 'LADOPT': 'TextEdit', 'AREASQMI': 'TextEdit', 'LASTUPDATE': 'DateTime', 'JURISTYPE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Intersect_Parcels_3.set('fieldImages', {'VGIN_QPID': 'TextEdit', 'PARCELID': 'TextEdit', });
lyr_Research_Parcels_4.set('fieldImages', {'VGIN_QPID': 'TextEdit', 'PARCELID': 'TextEdit', 'UH_join_La': 'TextEdit', 'UH_join_ea': 'TextEdit', 'UH_join_he': 'TextEdit', 'UH_join_fe': 'TextEdit', });
lyr_BCS_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Element': 'TextEdit', 'Type': 'TextEdit', 'Horsepower': 'TextEdit', 'Link': 'TextEdit', });
lyr_Woods_Corner_MR_6.set('fieldImages', {'name': 'TextEdit', 'owner': 'TextEdit', 'volume': 'TextEdit', 'use': 'TextEdit', });
lyr_ACP_Alignment_2016_7.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Length': 'TextEdit', });
lyr_County_Parcels_1.set('fieldLabels', {'OBJECTID': 'no label', 'VGIN_QPID': 'no label', 'FIPS': 'no label', 'LOCALITY': 'no label', 'PARCELID': 'no label', 'PTM_ID': 'no label', 'LASTUPDATE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_County_Boundary_2.set('fieldLabels', {'STCOFIPS': 'no label', 'GNIS': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'GSOURCE': 'no label', 'LADOPT': 'no label', 'AREASQMI': 'no label', 'LASTUPDATE': 'no label', 'JURISTYPE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Intersect_Parcels_3.set('fieldLabels', {'VGIN_QPID': 'no label', 'PARCELID': 'no label', });
lyr_Research_Parcels_4.set('fieldLabels', {'VGIN_QPID': 'no label', 'PARCELID': 'no label', 'UH_join_La': 'no label', 'UH_join_ea': 'no label', 'UH_join_he': 'no label', 'UH_join_fe': 'no label', });
lyr_BCS_5.set('fieldLabels', {'OBJECTID': 'no label', 'Element': 'no label', 'Type': 'no label', 'Horsepower': 'no label', 'Link': 'no label', });
lyr_Woods_Corner_MR_6.set('fieldLabels', {'name': 'no label', 'owner': 'no label', 'volume': 'no label', 'use': 'no label', });
lyr_ACP_Alignment_2016_7.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'Length': 'no label', });
lyr_ACP_Alignment_2016_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
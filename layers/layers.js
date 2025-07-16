var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1 = new ol.format.GeoJSON();
var features_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1 = format_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1.readFeatures(json_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1.addFeatures(features_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1);
var lyr_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1, 
                style: style_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1,
                popuplayertitle: 'UTM_Batas_Administrasi_Kecamatan_Jakarta Barat',
                interactive: true,
    title: 'UTM_Batas_Administrasi_Kecamatan_Jakarta Barat<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_0.png" /> Cengkareng<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_1.png" /> Grogol Petamburan<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_2.png" /> Kalideres<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_3.png" /> Kebon Jeruk<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_4.png" /> Kembangan<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_5.png" /> Pal Merah<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_6.png" /> Taman Sari<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_7.png" /> Tambora<br />\
    <img src="styles/legend/UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1_8.png" /> <br />' });
var format_FaskesJakartaBarat_2 = new ol.format.GeoJSON();
var features_FaskesJakartaBarat_2 = format_FaskesJakartaBarat_2.readFeatures(json_FaskesJakartaBarat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaskesJakartaBarat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaskesJakartaBarat_2.addFeatures(features_FaskesJakartaBarat_2);
var lyr_FaskesJakartaBarat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaskesJakartaBarat_2, 
                style: style_FaskesJakartaBarat_2,
                popuplayertitle: 'Faskes Jakarta Barat',
                interactive: true,
                title: '<img src="styles/legend/FaskesJakartaBarat_2.png" /> Faskes Jakarta Barat'
            });

lyr_EsriDarkGray_0.setVisible(true);lyr_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1.setVisible(true);lyr_FaskesJakartaBarat_2.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1,lyr_FaskesJakartaBarat_2];
lyr_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'Penduduk': 'Penduduk', 'Luas': 'Luas', });
lyr_FaskesJakartaBarat_2.set('fieldAliases', {'id': 'id', 'Keterangan': 'Keterangan', 'Foto': 'Foto', });
lyr_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'Penduduk': 'TextEdit', 'Luas': 'TextEdit', });
lyr_FaskesJakartaBarat_2.set('fieldImages', {'id': 'TextEdit', 'Keterangan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_UTM_Batas_Administrasi_Kecamatan_JakartaBarat_1.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'inline label - always visible', 'Penduduk': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_FaskesJakartaBarat_2.set('fieldLabels', {'id': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_FaskesJakartaBarat_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
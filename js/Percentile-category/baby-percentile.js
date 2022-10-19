var dd_baby = getElement("baby_dd_Id");
var age_input = getElement("Age_input_Id");
var dd_age = getElement("Age_dd_Id");
var weight = getElement("Weight_input_Id");
var dd_weight = getElement("Weight_dd_Id");
var height = getElement("Height_input_Id");
var dd_height = getElement("Height_dd_Id");
var head = getElement("Head_input_Id");
var dd_head = getElement("Head_dd_Id");

function showChart(ctx) {
    //ctx.setDefault('weight', 10.5);
    //ctx.setDefault('height', 66)
    //ctx.setDefault('age', 15);
    //ctx.setDefault('headCircumference', 43);
    ctx.setDefault('showLines', 5);
    ctx.setDefault('whichChart', 1);
};

var sex = createValueSelect({
    girl: { name: 'girl', value: 1 },
    boy: { name: 'boy', value: 2 },
});

var whichOne =createValueSelect({
    weight: { name: 'weight chart', value: 1 },
    height: { name: 'height chart', value: 2 },
    head: { name: 'head circumference chart', value: 3 }
});

function chartResult(ctx) {
    ctx.bindValueSelect(whichOne, 'whichChart');
    ctx.setDefault('whichChart', 1);
    ctx.bindValueSelect(sex, 'sex');
    ctx.setDefault('sex', 1);
};

var months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

// girls weight

var thirdPercentile0 = [[0, 2.4], [0.4877, 2.775], [1.511, 3.648], [2.534, 4.336], [3.558, 4.871], [4.582, 5.307], [5.605, 5.663], [6.629, 5.963], [7.653, 6.227], [8.677, 6.458], [9.701, 6.667], [10.72, 6.864], [11.75, 7.050], [12.77, 7.230], [13.80, 7.406], [14.82, 7.578], [15.84, 7.750], [16.87, 7.921], [17.89, 8.089], [18.92, 8.257], [19.94, 8.423], [20.96, 8.590], [21.99, 8.754], [23.01, 8.920], [23.76, 9.040]
];
var thirdPercentile = returnY(linearInterpolation(thirdPercentile0, 0, 24, 25));
thirdPercentile[thirdPercentile.length - 1] = 9.1;


var fifteenthPercentile0 = [[0, 2.8], [0.4635, 3.108], [1.487, 4.062], [2.510, 4.812], [3.534, 5.395], [4.557, 5.867], [5.581, 6.255], [6.605, 6.586], [7.629, 6.870], [8.653, 7.127], [9.676, 7.358], [10.70, 7.574], [11.72, 7.778], [12.75, 7.976], [13.77, 8.169], [14.80, 8.360], [15.82, 8.548], [16.84, 8.734], [17.87, 8.922], [18.89, 9.106], [19.92, 9.289], [20.94, 9.472], [21.96, 9.655], [22.99, 9.839], [23.76, 9.975]
];
var fifteenthPercentile = returnY(linearInterpolation(fifteenthPercentile0, 0, 24, 25));
fifteenthPercentile[fifteenthPercentile.length - 1] = 10.05;

var fiftiethPercentile0 = [[0, 3.1], [0.4274, 3.569], [1.367, 4.549], [2.367, 5.427], [3.390, 6.021], [4.414, 6.586], [5.437, 7.031], [6.461, 7.407], [7.485, 7.743], [8.509, 8.026], [9.533, 8.297], [10.56, 8.596], [11.58, 8.828], [12.60, 8.969], [13.63, 9.216], [14.65, 9.440], [15.68, 9.654], [16.70, 9.865], [17.72, 10.08], [18.75, 10.29], [19.77, 10.50], [20.80, 10.71], [21.82, 10.90], [22.84, 11.12], [23.69, 11.28]
];
var fiftiethPercentile = returnY(linearInterpolation(fiftiethPercentile0, 0, 24, 25));
fiftiethPercentile[fiftiethPercentile.length - 1] = 11.4;


var eigthyFifthPercentile0 = [[0, 3.78], [0.4030, 4.097], [1.283, 5.123], [2.223, 6.017], [3.246, 6.783], [4.270, 7.401], [5.294, 7.910], [6.317, 8.344], [7.341, 8.725], [8.365, 9.064], [9.389, 9.374], [10.41, 9.662], [11.44, 9.934], [12.46, 10.20], [13.48, 10.45], [14.51, 10.70], [15.53, 10.94], [16.56, 11.18], [17.58, 11.43], [18.60, 11.67], [19.63, 11.90], [20.65, 12.15], [21.68, 12.38], [22.70, 12.63], [23.62, 12.84]
];
var eigthyFifthPercentile = returnY(linearInterpolation(eigthyFifthPercentile0, 0, 24, 25));
eigthyFifthPercentile[eigthyFifthPercentile.length - 1] = 12.95;


var ninetySeventhPercentile0 = [[0, 4.1], [0.4025, 4.576], [1.164, 5.571], [2.032, 6.515], [3.032, 7.369], [4.055, 8.078], [5.078, 8.664], [6.102, 9.160], [7.126, 9.596], [8.150, 9.987], [9.173, 10.34], [10.20, 10.67], [11.22, 10.99], [12.24, 11.29], [13.27, 11.57], [14.29, 11.86], [15.32, 12.13], [16.34, 12.41], [17.36, 12.68], [18.39, 12.95], [19.41, 13.22], [20.44, 13.49], [21.46, 13.76], [22.48, 14.03], [23.47, 14.29]
];
var ninetySeventhPercentile = returnY(linearInterpolation(ninetySeventhPercentile0, 0, 24, 25));
ninetySeventhPercentile[ninetySeventhPercentile.length - 1] = 14.45;


var yValues = [
    thirdPercentile,
    fifteenthPercentile,
    fiftiethPercentile,
    eigthyFifthPercentile,
    ninetySeventhPercentile,
];

// boys height

var thirdPercentileBH0 = [[0, 46.5], [0.31875, 48.018], [1.0941, 51.425], [2.0363, 54.755], [3.0618, 57.713], [4.0873, 60.125], [5.1126, 62.104], [6.1379, 63.783], [7.1632, 65.291], [8.1884, 66.677], [9.2136, 67.997], [10.239, 69.248], [11.264, 70.437], [12.289, 71.572], [13.314, 72.667], [14.340, 73.712], [15.365, 74.723], [16.390, 75.698], [17.415, 76.644], [18.440, 77.560], [19.465, 78.438], [20.490, 79.294], [21.516, 80.129], [22.541, 80.937], [23.542, 81.707]
];
var thirdPercentileBH = returnY(linearInterpolation(thirdPercentileBH0, 0, 24, 25));
thirdPercentileBH[thirdPercentileBH.length - 1] = 82;
var fifteenthPercentileBH0 = [[0, 48], [0.32071, 49.591], [1.0692, 52.979], [1.9770, 56.236], [2.9906, 59.254], [4.0161, 61.732], [5.0414, 63.759], [6.0667, 65.483], [7.0920, 67.026], [8.1173, 68.453], [9.1425, 69.806], [10.168, 71.097], [11.193, 72.335], [12.218, 73.512], [13.243, 74.640], [14.268, 75.743], [15.294, 76.804], [16.319, 77.832], [17.344, 78.824], [18.369, 79.788], [19.394, 80.726], [20.419, 81.638], [21.445, 82.520], [22.470, 83.381], [23.495, 84.225]
];
var fifteenthPercentileBH = returnY(linearInterpolation(fifteenthPercentileBH0, 0, 24, 25));
fifteenthPercentileBH[fifteenthPercentileBH.length - 1] = 84.8;
var fiftiethPercentileBH0 = [[0, 50], [0.29560, 51.501], [1.0471, 54.911], [1.9416, 58.209], [2.9434, 61.251], [3.9688, 63.792], [4.9942, 65.856], [6.0195, 67.636], [7.0448, 69.218], [8.0700, 70.674], [9.0953, 72.079], [10.120, 73.421], [11.146, 74.710], [12.171, 75.928], [13.196, 77.129], [14.221, 78.282], [15.246, 79.410], [16.272, 80.479], [17.297, 81.537], [18.322, 82.565], [19.347, 83.566], [20.372, 84.537], [21.397, 85.485], [22.423, 86.416], [23.448, 87.329]
];
var fiftiethPercentileBH = returnY(linearInterpolation(fiftiethPercentileBH0, 0, 24, 25));
fiftiethPercentileBH[fiftiethPercentileBH.length - 1] = 87.9;
var eigthyFifthPercentileBH0 = [[0, 52], [0.30793, 53.574], [1.0356, 56.886], [1.9182, 60.205], [2.9199, 63.319], [3.9454, 65.953], [4.9708, 68.011], [5.9961, 69.813], [7.0214, 71.430], [8.0466, 72.939], [9.0719, 74.380], [10.097, 75.764], [11.122, 77.094], [12.148, 78.381], [13.173, 79.621], [14.198, 80.834], [15.223, 82.010], [16.248, 83.154], [17.274, 84.272], [18.299, 85.357], [19.324, 86.417], [20.349, 87.455], [21.374, 88.469], [22.399, 89.465], [23.424, 90.433]
];
var eigthyFifthPercentileBH = returnY(linearInterpolation(eigthyFifthPercentileBH0, 0, 24, 25));
eigthyFifthPercentileBH[eigthyFifthPercentileBH.length - 1] = 91;
var ninetySeventhPercentileBH0 = [[0, 53.5], [0.29631, 55.094], [1.0121, 58.440], [1.8827, 61.773], [2.8726, 64.887], [3.8981, 67.543], [4.9234, 69.707], [5.9488, 71.552], [6.9740, 73.199], [7.9993, 74.735], [9.0246, 76.210], [10.050, 77.636], [11.075, 79.008], [12.100, 80.337], [13.125, 81.628], [14.151, 82.882], [15.176, 84.104], [16.201, 85.296], [17.226, 86.463], [18.251, 87.599], [19.277, 88.715], [20.302, 89.804], [21.327, 90.873], [22.352, 91.917], [23.377, 92.944]
];
var ninetySeventhPercentileBH = returnY(linearInterpolation(ninetySeventhPercentileBH0, 0, 24, 25));
ninetySeventhPercentileBH[ninetySeventhPercentileBH.length - 1] = 93.5;

var yValuesBH = [
    thirdPercentileBH,
    fifteenthPercentileBH,
    fiftiethPercentileBH,
    eigthyFifthPercentileBH,
    ninetySeventhPercentileBH,
];

// girls height

var thirdPercentileGH0 = [[0, 45.9], [0.34209, 47.463], [1.1874, 50.744], [2.1756, 53.797], [3.1995, 56.365], [4.2234, 58.512], [5.2473, 60.328], [6.2712, 61.928], [7.2951, 63.394], [8.3189, 64.771], [9.3428, 66.074], [10.367, 67.322], [11.391, 68.517], [12.415, 69.667], [13.438, 70.777], [14.462, 71.844], [15.486, 72.873], [16.510, 73.872], [17.534, 74.840], [18.558, 75.780], [19.582, 76.693], [20.606, 77.581], [21.630, 78.448], [22.653, 79.287], [23.582, 80.032]
];
var thirdPercentileGH = returnY(linearInterpolation(thirdPercentileGH0, 0, 24, 25));
thirdPercentileGH[thirdPercentileGH.length - 1] = 80.45;

var fifteenthPercentileGH0 = [[0, 47.3], [0.29447, 48.821], [1.1636, 52.315], [2.1518, 55.454], [3.1757, 58.092], [4.1996, 60.295], [5.2234, 62.168], [6.2473, 63.811], [7.2712, 65.320], [8.2951, 66.740], [9.3190, 68.093], [10.343, 69.387], [11.367, 70.629], [12.391, 71.829], [13.415, 72.984], [14.439, 74.102], [15.462, 75.178], [16.486, 76.223], [17.510, 77.240], [18.534, 78.230], [19.558, 79.187], [20.582, 80.127], [21.606, 81.036], [22.630, 81.923], [23.570, 82.722]
];
var fifteenthPercentileGH = returnY(linearInterpolation(fifteenthPercentileGH0, 0, 24, 25));
fifteenthPercentileGH[fifteenthPercentileGH.length - 1] = 83.1;

var fiftiethPercentileGH0 = [[0, 49.1], [0.33018, 50.923], [1.1398, 54.264], [2.1041, 57.422], [3.1280, 60.168], [4.1519, 62.447], [5.1758, 64.381], [6.1997, 66.088], [7.2236, 67.657], [8.2475, 69.133], [9.2714, 70.542], [10.295, 71.897], [11.319, 73.196], [12.343, 74.455], [13.367, 75.667], [14.391, 76.845], [15.415, 77.984], [16.439, 79.090], [17.463, 80.163], [18.486, 81.209], [19.510, 82.232], [20.534, 83.224], [21.558, 84.193], [22.582, 85.141], [23.535, 86.001]
];
var fiftiethPercentileGH = returnY(linearInterpolation(fiftiethPercentileGH0, 0, 24, 25));
fiftiethPercentileGH[fiftiethPercentileGH.length - 1] = 86.45;

var eigthyFifthPercentileGH0 = [[0, 51], [0.31828, 52.824], [1.1041, 56.171], [2.0089, 59.259], [2.9852, 62.090], [4.0091, 64.387], [5.0330, 66.425], [6.0569, 68.211], [7.0807, 69.842], [8.1046, 71.384], [9.1285, 72.851], [10.152, 74.269], [11.176, 75.633], [12.200, 76.953], [13.224, 78.231], [14.248, 79.471], [15.272, 80.672], [16.296, 81.841], [17.320, 82.975], [18.344, 84.086], [19.367, 85.166], [20.391, 86.223], [21.415, 87.252], [22.439, 88.258], [23.463, 89.240]
];
var eigthyFifthPercentileGH = returnY(linearInterpolation(eigthyFifthPercentileGH0, 0, 24, 25));
eigthyFifthPercentileGH[eigthyFifthPercentileGH.length - 1] = 89.9;

var ninetySeventhPercentileGH0 = [[0, 52.9], [0.31828, 54.415], [1.0922, 57.781], [2.0327, 61.042], [3.0566, 63.946], [4.0805, 66.368], [5.1044, 68.424], [6.1283, 70.237], [7.1522, 71.910], [8.1761, 73.483], [9.2000, 74.997], [10.224, 76.451], [11.248, 77.861], [12.272, 79.223], [13.296, 80.545], [14.319, 81.830], [15.343, 83.077], [16.367, 84.290], [17.391, 85.474], [18.415, 86.628], [19.439, 87.752], [20.463, 88.850], [21.487, 89.925], [22.511, 90.978], [23.499, 91.968]
];
var ninetySeventhPercentileGH = returnY(linearInterpolation(ninetySeventhPercentileGH0, 0, 24, 25));
ninetySeventhPercentileGH[ninetySeventhPercentileGH.length - 1] = 92.5;

var yValuesGH = [
    thirdPercentileGH,
    fifteenthPercentileGH,
    fiftiethPercentileGH,
    eigthyFifthPercentileGH,
    ninetySeventhPercentileGH,
];

// boys weight

var thirdPercentileBW0 = [[0, 2.5],
[0.4284, 2.902], [1.382, 3.865], [2.406, 4.700], [3.431, 5.345], [4.455, 5.853], [5.480, 6.262], [6.505, 6.600], [7.529, 6.888], [8.554, 7.140], [9.579, 7.369], [10.60, 7.579], [11.63, 7.778], [12.65, 7.967], [13.68, 8.150], [14.70, 8.327], [15.73, 8.499], [16.75, 8.668], [17.78, 8.835], [18.80, 8.999], [19.83, 9.160], [20.85, 9.321], [21.87, 9.478], [22.90, 9.636], [23.71, 9.761]
];
var thirdPercentileBW = returnY(linearInterpolation(thirdPercentileBW0, 0, 24, 25));
thirdPercentileBW[thirdPercentileBW.length - 1] = 9.8;


var fifteenthPercentileBW0 = [[0, 2.82],
[0.4641, 3.248], [1.441, 4.365], [2.454, 5.256], [3.478, 5.937], [4.503, 6.462], [5.528, 6.891], [6.552, 7.267], [7.577, 7.563], [8.602, 7.853], [9.626, 8.101], [10.65, 8.331], [11.68, 8.548], [12.70, 8.757], [13.72, 8.958], [14.75, 9.153], [15.77, 9.344], [16.80, 9.532], [17.82, 9.718], [18.85, 9.901], [19.87, 10.08], [20.90, 10.26], [21.92, 10.44], [22.95, 10.62], [23.72, 10.75]
];
var fifteenthPercentileBW = returnY(linearInterpolation(fifteenthPercentileBW0, 0, 24, 25));
fifteenthPercentileBW[fifteenthPercentileBW.length - 1] = 10.8;

var fiftiethPercentileBW0 = [[0, 3.35],
[0.4164, 3.745], [1.298, 4.839], [2.239, 5.785], [3.264, 6.560], [4.289, 7.166], [5.313, 7.658], [6.338, 8.070], [7.363, 8.424], [8.387, 8.736], [9.412, 9.020], [10.44, 9.282], [11.46, 9.529], [12.49, 9.766], [13.51, 9.996], [14.54, 10.22], [15.56, 10.44], [16.58, 10.65], [17.61, 10.87], [18.63, 11.07], [19.66, 11.28], [20.68, 11.49], [21.71, 11.70], [22.73, 11.90], [23.63, 12.08]
];
var fiftiethPercentileBW = returnY(linearInterpolation(fiftiethPercentileBW0, 0, 24, 25));
fiftiethPercentileBW[fiftiethPercentileBW.length - 1] = 12.15;


var eigthyFifthPercentileBW0 = [[0, 3.82],
[0.3926, 4.287], [1.191, 5.393], [2.096, 6.418], [3.121, 7.287], [4.146, 7.960], [5.170, 8.510], [6.195, 8.974], [7.220, 9.374], [8.244, 9.729], [9.269, 10.05], [10.29, 10.35], [11.32, 10.63], [12.34, 10.90], [13.37, 11.16], [14.39, 11.42], [15.42, 11.66], [16.44, 11.91], [17.47, 12.16], [18.49, 12.40], [19.52, 12.64], [20.54, 12.88], [21.56, 13.12], [22.59, 13.36], [23.56, 13.59]
];
var eigthyFifthPercentileBW = returnY(linearInterpolation(eigthyFifthPercentileBW0, 0, 24, 25));
eigthyFifthPercentileBW[eigthyFifthPercentileBW.length - 1] = 13.7;


var ninetySeventhPercentileBW0 = [[0, 4.35],
[0.3569, 4.750], [1.072, 5.818], [1.870, 6.850], [2.835, 7.790], [3.860, 8.552], [4.884, 9.171], [5.909, 9.695], [6.934, 10.15], [7.958, 10.55], [8.983, 10.91], [10.01, 11.24], [11.03, 11.56], [12.06, 11.86], [13.08, 12.15], [14.11, 12.44], [15.13, 12.72], [16.16, 13.00], [17.18, 13.27], [18.20, 13.54], [19.23, 13.81], [20.25, 14.09], [21.28, 14.36], [22.30, 14.63], [23.33, 14.90], [23.98, 15.10]
];
var ninetySeventhPercentileBW = returnY(linearInterpolation(ninetySeventhPercentileBW0, 0, 24, 25));
ninetySeventhPercentileBW[ninetySeventhPercentileBW.length - 1] = 15.1;


var yValuesBW = [
    thirdPercentileBW,
    fifteenthPercentileBW,
    fiftiethPercentileBW,
    eigthyFifthPercentileBW,
    ninetySeventhPercentileBW,
];


// girls head circumference

var thirdPercentileGC0 = [[0, 31.75], [0.24671, 32.520], [0.83735, 34.054], [1.6187, 35.460], [2.6303, 36.810], [3.7314, 37.981], [4.8324, 38.939], [5.9333, 39.729], [7.0341, 40.393], [8.1349, 40.952], [9.2357, 41.428], [10.336, 41.838], [11.437, 42.190], [12.538, 42.504], [13.638, 42.780], [14.739, 43.030], [15.840, 43.257], [16.940, 43.466], [18.041, 43.658], [19.142, 43.843], [20.242, 44.016], [21.343, 44.184], [22.443, 44.345], [23.506, 44.494], [17.543, 43.579]

];
var thirdPercentileGC = returnY(linearInterpolation(thirdPercentileGC0, 0, 24, 25));
thirdPercentileGC[thirdPercentileGC.length - 1] = 44.52;

var fifteenthPercentileGC0 = [[0, 32.75], [0.24840, 33.464], [0.81222, 34.978], [1.5807, 36.410], [2.5796, 37.786], [3.6807, 38.993], [4.7817, 39.976], [5.8826, 40.793], [6.9835, 41.475], [8.0843, 42.048], [9.1851, 42.533], [10.286, 42.953], [11.386, 43.320], [12.487, 43.633], [13.588, 43.922], [14.688, 44.172], [15.789, 44.407], [16.890, 44.613], [17.990, 44.816], [19.091, 44.998], [20.192, 45.178], [21.292, 45.347], [22.393, 45.506], [23.481, 45.664], [23.491, 45.674]

];
var fifteenthPercentileGC = returnY(linearInterpolation(fifteenthPercentileGC0, 0, 24, 25));
fifteenthPercentileGC[fifteenthPercentileGC.length - 1] = 45.7;

var fiftiethPercentileGC0 = [[0, 34], [0.23494, 34.688], [0.80001, 36.145], [1.5430, 37.631], [2.5290, 38.953], [3.6301, 40.236], [4.7312, 41.355], [5.8321, 42.136], [6.9330, 42.846], [8.0338, 43.350], [9.1345, 43.887], [10.235, 44.335], [11.336, 44.818], [12.437, 45.083], [13.537, 45.347], [14.638, 45.555], [15.739, 45.750], [16.839, 45.953], [17.940, 46.189], [19.040, 46.417], [20.141, 46.571], [21.242, 46.739], [22.342, 46.915], [23.443, 47.070], [23.831, 47.152]

];
var fiftiethPercentileGC = returnY(linearInterpolation(fiftiethPercentileGC0, 0, 24, 25));
fiftiethPercentileGC[fiftiethPercentileGC.length - 1] = 47, 1;

var eigthyFifthPercentileGC0 = [[0, 35.1], [0.26244, 35.932], [0.83906, 37.448], [1.5820, 38.886], [2.5424, 40.282], [3.6308, 41.540], [4.7318, 42.584], [5.8328, 43.444], [6.9337, 44.168], [8.0345, 44.774], [9.1353, 45.283], [10.236, 45.722], [11.337, 46.105], [12.437, 46.437], [13.538, 46.733], [14.639, 46.997], [15.739, 47.237], [16.840, 47.457], [17.941, 47.662], [19.041, 47.855], [20.142, 48.035], [21.242, 48.210], [22.343, 48.381], [23.444, 48.538], [23.850, 48.604]

];
var eigthyFifthPercentileGC = returnY(linearInterpolation(eigthyFifthPercentileGC0, 0, 24, 25));
eigthyFifthPercentileGC[eigthyFifthPercentileGC.length - 1] = 48.6;

var ninetySeventhPercentileGC0 = [[0, 36.25], [0.32607, 37.109], [0.99328, 38.775], [1.7618, 40.190], [2.7606, 41.594], [3.8618, 42.840], [4.9628, 43.862], [6.0638, 44.705], [7.1646, 45.414], [8.2654, 46.007], [9.3662, 46.511], [10.467, 46.943], [11.568, 47.320], [12.668, 47.649], [13.769, 47.943], [14.870, 48.207], [15.970, 48.444], [17.071, 48.663], [18.172, 48.869], [19.272, 49.057], [20.373, 49.242], [21.473, 49.419], [22.574, 49.586], [23.572, 49.737], [3.2636, 42.201]

];
var ninetySeventhPercentileGC = returnY(linearInterpolation(ninetySeventhPercentileGC0, 0, 24, 25));
ninetySeventhPercentileGC[ninetySeventhPercentileGC.length - 1] = 49.85;

var yValuesGC = [
    thirdPercentileGC,
    fifteenthPercentileGC,
    fiftiethPercentileGC,
    eigthyFifthPercentileGC,
    ninetySeventhPercentileGC,
];

// boys head circumference

var thirdPercentileBC0 = [[0, 32.1], [0.19650, 32.796], [0.65881, 34.254], [1.2875, 35.687], [2.1467, 37.139], [3.1850, 38.503], [4.2871, 39.658], [5.3890, 40.589], [6.4907, 41.351], [7.5922, 41.977], [8.6937, 42.500], [9.7951, 42.942], [10.896, 43.321], [11.998, 43.642], [13.099, 43.925], [14.200, 44.175], [15.301, 44.401], [16.402, 44.599], [17.504, 44.789], [18.605, 44.963], [19.706, 45.122], [20.807, 45.275], [21.908, 45.424], [23.009, 45.559], [23.790, 45.655]

];
var thirdPercentileBC = returnY(linearInterpolation(thirdPercentileBC0, 0, 24, 25));
thirdPercentileBC[thirdPercentileBC.length - 1] = 45.65;

var fifteenthPercentileBC0 = [[0, 33.25], [0.23606, 33.958], [0.73679, 35.430], [1.3911, 36.870], [2.2374, 38.262], [3.2629, 39.592], [4.3650, 40.741], [5.4669, 41.673], [6.5686, 42.434], [7.6701, 43.065], [8.7716, 43.594], [9.8730, 44.040], [10.974, 44.420], [12.076, 44.749], [13.177, 45.037], [14.278, 45.292], [15.379, 45.520], [16.480, 45.726], [17.582, 45.922], [18.683, 46.095], [19.784, 46.262], [20.885, 46.424], [21.986, 46.568], [23.087, 46.716], [23.842, 46.812]

];
var fifteenthPercentileBC = returnY(linearInterpolation(fifteenthPercentileBC0, 0, 24, 25));
fifteenthPercentileBC[fifteenthPercentileBC.length - 1] = 46.7;

var fiftiethPercentileBC0 = [[0, 34.5], [0.22449, 35.196], [0.75206, 36.683], [1.4172, 38.132], [2.3027, 39.583], [3.3410, 40.913], [4.4431, 42.060], [5.5450, 42.988], [6.6467, 43.756], [7.7483, 44.382], [8.8498, 44.925], [9.9512, 45.374], [11.052, 45.769], [12.154, 46.103], [13.255, 46.393], [14.356, 46.662], [15.457, 46.899], [16.559, 47.099], [17.660, 47.299], [18.761, 47.496], [19.862, 47.667], [20.963, 47.828], [22.064, 47.984], [23.165, 48.123], [23.882, 48.213]

];
var fiftiethPercentileBC = returnY(linearInterpolation(fiftiethPercentileBC0, 0, 24, 25));
fiftiethPercentileBC[fiftiethPercentileBC.length - 1] = 48.3;

var eigthyFifthPercentileBC0 = [[0, 35.9], [0.27708, 36.587], [0.82906, 38.093], [1.5218, 39.532], [2.4193, 40.959], [3.4704, 42.287], [4.5725, 43.418], [5.6743, 44.346], [6.7761, 45.110], [7.8776, 45.747], [8.9791, 46.285], [10.081, 46.738], [11.182, 47.131], [12.283, 47.473], [13.384, 47.770], [14.486, 48.037], [15.587, 48.278], [16.688, 48.497], [17.789, 48.700], [18.890, 48.892], [19.991, 49.064], [21.093, 49.236], [22.194, 49.402], [23.295, 49.552], [23.978, 49.633]

];
var eigthyFifthPercentileBC = returnY(linearInterpolation(eigthyFifthPercentileBC0, 0, 24, 25));
eigthyFifthPercentileBC[eigthyFifthPercentileBC.length - 1] = 49.6;

var ninetySeventhPercentileBC0 = [[0, 37],
[0.83003, 39.070], [1.5228, 40.517], [2.4203, 41.952], [3.4714, 43.291], [4.5735, 44.434], [5.6754, 45.372], [6.7771, 46.152], [7.8787, 46.796], [8.9802, 47.347], [10.082, 47.812], [11.183, 48.211], [12.284, 48.558], [13.386, 48.866], [14.487, 49.135], [15.588, 49.385], [16.689, 49.606], [17.790, 49.816], [18.891, 50.012], [19.993, 50.197], [21.094, 50.373], [22.195, 50.537], [23.296, 50.699], [23.936, 50.790]

];
var ninetySeventhPercentileBC = returnY(linearInterpolation(ninetySeventhPercentileBC0, 0, 24, 25));
ninetySeventhPercentileBC[ninetySeventhPercentileBC.length - 1] = 50.8;

var yValuesBC = [
    thirdPercentileBC,
    fifteenthPercentileBC,
    fiftiethPercentileBC,
    eigthyFifthPercentileBC,
    ninetySeventhPercentileBC,
];

var colors = [1, 2, 3, 7, 8];  // avoid hard-to-see colours

function createPercentileChartAddValues(months, yValues) {
    var allDataChart = [];
    for (var j = 0; j < yValues.length; j++) {  // Y axis
        var tempArray = [];
        for (var i = 0; i < months.length; i++) { // X axis
            tempArray.push([months[i], yValues[j][i]]);
        }
        allDataChart.push(tempArray);
    }
    return allDataChart;
}

var girlsWeightData = createPercentileChartAddValues(months, yValues);
var boysWeightData = createPercentileChartAddValues(months, yValuesBW);
var girlsHeightData = createPercentileChartAddValues(months, yValuesGH);
var boysHeightData = createPercentileChartAddValues(months, yValuesBH);
var girlsCircumferenceData = createPercentileChartAddValues(months, yValuesGC);
var boysCircumferenceData = createPercentileChartAddValues(months, yValuesBC);

var allLabels = ["months",
    "3rd",
    "15th",
    "50th", , , ,
    "85th",
    "97th"];

var allData = [];
for (var i = 0; i < months.length; i++) {
    allData.push([months[i],
    thirdPercentile[i],
    fifteenthPercentile[i],
    fiftiethPercentile[i],
    eigthyFifthPercentile[i],
    ninetySeventhPercentile[i],
    ])
        ;
}

var dd_baby = getElement("baby_dd_Id");
var age_input = getElement("Age_input_Id");
var dd_age = getElement("Age_dd_Id");
var weight = getElement("Weight_input_Id");
var dd_weight = getElement("Weight_dd_Id");
var height = getElement("Height_input_Id");
var dd_height = getElement("Height_dd_Id");
var head = getElement("Head_input_Id");
var dd_head = getElement("Head_dd_Id");
function getResult() {
    var weight = weight.value
    var height = height.value;
    var headCircumference = head.value;
   var  age = age_input.value;
   var sex = getSelectedValue(dd_baby)
   
   
    var multiplier = 10;
    var units_multiplier = 1;
    var units = '';

    var text_weight = '', text_height = '', text_headCircumference = '';

    if (sex === 1) {
        if (whichChart === 1) {
            chartTitle = "Weight chart for girls aged 0-24 months";
            chartData = createPercentileChart(girlsWeightData, months, colors, multiplier);

            ctx.showVariables('weight_units_vs');
            units_multiplier = ctx.getNumberValue('weight_units_vs') || 1;
            if (units_multiplier === 1000) { units = 'g'; }
            else if (units_multiplier === 35.274) { units = 'oz'; }
            else if (units_multiplier === 2.2046) { units = 'lbs'; }
            else { units = 'kg'; units_multiplier = 1; }

        }
        else if (whichChart === 2) {
            chartTitle = "Height chart for girls aged 0-24 months";
            chartData = createPercentileChart(girlsHeightData, months, colors, multiplier);

            ctx.showVariables('height_units_vs');
            units_multiplier = ctx.getNumberValue('height_units_vs') || 1;
            if (units_multiplier === 0.01) { units = 'm'; }
            else if (units_multiplier === 0.3937) { units = 'in'; }
            else if (units_multiplier === 0.03281) { units = 'ft'; }
            else { units = 'cm'; units_multiplier = 1; }
        }
        else {
            chartTitle = "Head circumference chart for girls aged 0-24 months";
            chartData = createPercentileChart(girlsCircumferenceData, months, colors, multiplier);

            ctx.showVariables('height_units_vs');
            units_multiplier = ctx.getNumberValue('height_units_vs') || 1;
            if (units_multiplier === 0.01) { units = 'm'; }
            else if (units_multiplier === 0.3937) { units = 'in'; }
            else if (units_multiplier === 0.03281) { units = 'ft'; }
            else { units = 'cm'; units_multiplier = 1; }
        }

        text_weight = returnTextResult(age, weight, createPercentileChart(girlsWeightData, months, colors, multiplier), allLabels);
        text_height = returnTextResult(age, height, createPercentileChart(girlsHeightData, months, colors, multiplier), allLabels);
        text_headCircumference = returnTextResult(age, headCircumference, createPercentileChart(girlsCircumferenceData, months, colors, multiplier), allLabels);
    }

    if (sex === 2) {
        if (whichChart === 1) {
            chartTitle = "Weight chart for boys aged 0-24 months";
            chartData = createPercentileChart(boysWeightData, months, colors, multiplier);

            ctx.showVariables('weight_units_vs');
            units_multiplier = ctx.getNumberValue('weight_units_vs') || 1;
            if (units_multiplier === 1000) { units = 'g'; }
            else if (units_multiplier === 35.274) { units = 'oz'; }
            else if (units_multiplier === 2.2046) { units = 'lbs'; }
            else { units = 'kg'; units_multiplier = 1; }
        }
        else if (whichChart === 2) {
            chartTitle = "Height chart for boys aged 0-24 months";
            chartData = createPercentileChart(boysHeightData, months, colors, multiplier);

            ctx.showVariables('height_units_vs');
            units_multiplier = ctx.getNumberValue('height_units_vs') || 1;
            if (units_multiplier === 0.01) { units = 'm'; }
            else if (units_multiplier === 0.3937) { units = 'in'; }
            else if (units_multiplier === 0.03281) { units = 'ft'; }
            else { units = 'cm'; units_multiplier = 1; }
        }
        else {
            chartTitle = "Head circumference chart for boys aged 0-24 months";
            chartData = createPercentileChart(boysCircumferenceData, months, colors, multiplier);

            ctx.showVariables('height_units_vs');
            units_multiplier = ctx.getNumberValue('height_units_vs') || 1;
            if (units_multiplier === 0.01) { units = 'm'; }
            else if (units_multiplier === 0.3937) { units = 'in'; }
            else if (units_multiplier === 0.03281) { units = 'ft'; }
            else { units = 'cm'; units_multiplier = 1; }
        }

        text_weight = returnTextResult(age, weight, createPercentileChart(boysWeightData, months, colors, multiplier), allLabels);
        text_height = returnTextResult(age, height, createPercentileChart(boysHeightData, months, colors, multiplier), allLabels);
        text_headCircumference = returnTextResult(age, headCircumference, createPercentileChart(boysCircumferenceData, months, colors, multiplier), allLabels);
    }

    var chartLabels = ['age', , , , , , , , , , 'baby'];


    for (var k = 0; k < chartData.length; k++) {
        chartData[k].push(); // empty values ensure single point (no line)
    }


    if (whichChart === 1) {
        chartData[multiplier * (age)][chartLabels.length - 1] = weight;
    }
    else if (whichChart === 2) {
        chartData[multiplier * (age)][chartLabels.length - 1] = height;
    }
    else { chartData[multiplier * (age)][chartLabels.length - 1] = headCircumference; }


    if (weight > 0) {
        ctx.addHtml('<b>Weight</b>: Your baby\'s weight is ' + text_weight + '.', { afterVariable: 'headCircumference' });
    }
    if (height > 0) {
        ctx.addHtml('<b>Height</b>: Your baby\'s height is ' + text_height + '.', { afterVariable: 'headCircumference' });
    }
    if (headCircumference > 0) {
        ctx.addHtml('<b>Head circumference</b>: Your baby\'s head circumference is ' + text_headCircumference + '.', { afterVariable: 'headCircumference' });
    }


    var i = 0;
    while (age >= months[i] && i < months.length) {
        i++;
    }

    var j = 1;
    while (allData[i][j] < weight && j < allData[i].length) {
        j++;
    }
    /*
    // Since some positions are empty (color reasons) we check not to have undefineds
    var userPercentile = allLabels[j] || 
                        allLabels[j+1] ||
                        allLabels[j+2] ||
                        allLabels[j+3];
    ctx.addHtml ('Your baby is in the '+userPercentile+' percentile!');
    */

    var idx = colors[j];
    for (var t = -showLines; t < showLines - 2; t++) {
        idx = colors[j + t];
        if (allLabels[idx]) { chartLabels[idx] = allLabels[idx]; }
        //ctx.addHtml(allLabels[idx]);
    }

    //for correct units
    multiplyChartData(chartData, units_multiplier);
    chartTitle += ' (' + units + ')'

    // Finally we can simply print our chart!
    if (chartData !== undefined && chartData.length > 0) {
        ctx.addChart({
            type: 'line',
            labels: chartLabels,
            data: chartData,
            title: chartTitle,
            afterVariable: "hidden",
            alwaysShown: true
        });
    }
};


//////
//////
//////

///// FUNCTIONS

/////
/////
/////


function returnTextResult(age, userInput, chartDataTemp, allLabels) {
    var i;
    for (i = 0; i < chartDataTemp.length; i++) {
        if (age <= chartDataTemp[i][0]) {
            break;
        }
    }

    if (userInput <= chartDataTemp[i][1]) {
        return 'below ' + allLabels[1] + ' percentile';
    }
    if (userInput <= chartDataTemp[i][2]) {
        return 'between the ' + allLabels[1] + ' and ' + allLabels[2] + ' percentiles';
    }
    if (userInput <= chartDataTemp[i][3]) {
        return 'between the ' + allLabels[2] + ' and ' + allLabels[3] + ' percentiles';
    }
    if (userInput <= chartDataTemp[i][7]) {
        return 'between the ' + allLabels[3] + ' and ' + allLabels[7] + ' percentiles';
    }
    if (userInput <= chartDataTemp[i][8]) {
        return 'between the ' + allLabels[7] + ' and ' + allLabels[8] + ' percentiles';
    }
    if (userInput > chartDataTemp[i][8]) {
        return 'above the ' + allLabels[8] + ' percentile';
    }
    return ''
}


function createPercentileChart(yValues, months, colors, multiplier) {
    multiplier = multiplier >= 1 ? multiplier : 1;
    var minX = months[0];
    var maxX = months[months.length - 1];

    var xPoints = months.length === 3 ? months[1] : maxX - minX;
    xPoints *= multiplier;
    xPoints++;
    var allLines = linearInterpolation(yValues[0], minX, maxX, xPoints);
    for (var j = 1; j < yValues.length; j++) {
        var tempData = linearInterpolation(yValues[j], minX, maxX, xPoints);
        tempData = changeColor(tempData, colors[j]);
        allLines = combineData(allLines, tempData);

    }
    return allLines;
}

function linespace(nPoints, initValue, endValue) {
    if (initValue === undefined) { initValue = 0; }
    if (endValue === undefined) { endValue = nPoints; }
    if (endValue < initValue) {
        var temp = endValue;
        endValue = initValue;
        initValue = temp;
    }
    var myArray = [],
        stepSize = (endValue - initValue) / (nPoints);
    for (var i = initValue; i <= endValue; i += stepSize) {
        myArray.push(i);
    }
    return myArray;
}

function linearInterpolation(inputData, startValue, finalValue, nPoints) {
    // Convert to 1D arrays  
    var oldX = [];
    var oldY = [];
    if (isNaN(inputData[0][0]) && isNaN(inputData[inputData.length - 1][0])) {
        return inputData;
    }
    var i = 2;
    while (i < inputData.length / 2 && (isNaN(finalValue) || isNaN(startValue))) {
        finalValue = (isNaN(finalValue) ? inputData[inputData.length - i][0] : finalValue);
        startValue = (isNaN(startValue) ? inputData[i][0] : startValue);
        i++;
    }

    for (i = 0; i < inputData.length; i++) {
        if (inputData[i][0] <= finalValue) {
            oldX.push(inputData[i][0]);
            oldY.push(inputData[i][1]);
        }
    }
    if (finalValue === undefined) {
        finalValue = oldX[oldX.length - 1];
        nPoints = 100;//oldX.length;
    } else if (nPoints === undefined || nPoints <= 0) {
        nPoints = 100;//oldX.length;
    }

    var newY = [];
    var newX = linespace(nPoints, startValue, finalValue);
    var searching = false;
    i = 0;

    for (var j = 0; j < newX.length; j++) {
        newY.push(NaN);
        searching = true;
        i = 0;
        while (searching && i < oldX.length) {
            if (mathjs.round(newX[j], 2) === mathjs.round(oldX[i], 2)) {
                newY[j] = mathjs.round(oldY[i], 3);
                newX[j] = mathjs.round(newX[j], 1);
                searching = false;
            } else if (newX[j] > oldX[i] && newX[j] < oldX[i + 1]) {
                newY[j] = mathjs.round(
                    oldY[i] + (newX[j] - oldX[i]) *
                    ((oldY[i + 1] - oldY[i]) /
                        (oldX[i + 1] - oldX[i])), 3);
                newX[j] = mathjs.round(newX[j], 1);
                searching = false;
            }
            i++;
        }
    }
    var outputData = [];
    for (i = 0; i < newX.length; i++) {
        outputData.push([newX[i], newY[i]]);
    }
    return outputData;
}

function combineData(dataSetA, dataSetB) {
    if (dataSetA === undefined) { return dataSetB; }
    if (dataSetB === undefined) { return dataSetA; }
    var dataLength = dataSetA.length;
    if (dataLength !== dataSetB.length) { return []; }
    var combinedData = [];
    for (var i = 0; i < dataLength; i++) {
        var dataPoint = [];
        for (var j = 0; j < 36; j++) {
            dataPoint.push(dataSetA[i][j] || dataSetB[i][j]);
        }
        combinedData.push(dataPoint);
    }
    return combinedData;
}

function changeColor(ogChart, pos, start) {
    if (start === undefined) { start = 0; }
    if (start >= ogChart.length) { start = 0; }
    var output = [];
    var ogPos = 1;
    while (ogChart[start][ogPos] == null) {
        ogPos++;
    }
    for (var i = 0; i < ogChart.length; i++) {
        if (i < start) {
            output[i] = ogChart[i];
        } else {
            output.push([ogChart[i][0], , , , , , , , , , ,]);
            output[i][pos] = ogChart[i][ogPos];
        }
    }
    return output;
}

function returnY(array) {
    var tempArray = [];
    for (var i = 0; i < array.length; i++) {
        tempArray.push(array[i][1]);
    }
    return tempArray;
}

function multiplyChartData(chartDataTemp, multiplierTemp) {
    var i, j;
    for (i = 0; i < chartDataTemp.length; i++) {
        for (j = 1; j < 11; j++) {
            if (chartDataTemp[i][j] !== undefined) {
                chartDataTemp[i][j] = mathjs.round(multiplierTemp * chartDataTemp[i][j], 3);
            }
        }
    }
}
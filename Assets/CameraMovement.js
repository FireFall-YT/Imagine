#pragma strict
var playerPrefab: GameObject;
var players : GameObject[];
var cameraZDistance : float;

function Start () {
	players = GameObject.FindGameObjectsWithTag("Player");
	cameraZDistance = transform.localPosition.z;
}

function Update () {
	var avgX = 0.0;
	var avgY = 0.0;
	var avgZ = 0.0;
	for (var player in players) {
		avgX += player.transform.localPosition.x;
		avgY += player.transform.localPosition.y;
		avgZ += player.transform.localPosition.z;
	}
	avgX = avgX/players.length;
	avgY = avgY/players.length;
	avgZ = avgZ/players.length;
	
	transform.localPosition.x = avgX;
	transform.localPosition.y = avgY;
	transform.localPosition.z = avgZ / 2 + cameraZDistance;
}
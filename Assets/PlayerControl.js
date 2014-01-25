#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;

var speed = 10;

function Update () {
	if(Input.GetKey(moveUp)){
		rigidbody.velocity.z = speed;
	}else if(Input.GetKey(moveDown)){
		rigidbody.velocity.z = speed * -1;
	}else if(Input.GetKey(moveRight)) {
		rigidbody.velocity.x = speed;
	}else if(Input.GetKey(moveLeft)) {
		rigidbody.velocity.x = speed * -1;
	}else {
		rigidbody.velocity.x = 0;
		rigidbody.velocity.z = 0;
	}
}
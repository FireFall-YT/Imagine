﻿#pragma strict

var speed : float = 10.0;
var jumpSpeed : float = 10000.0;
var hasJumped : boolean = false;

var jumpKey : KeyCode;

function Jump(){
	rigidbody.AddForce(Vector3.up * jumpSpeed);
}


/*function OnCollisionEnter(collision: Collision){
	for(var contact : ContactPoint in collision.contacts){
		Debug.DrawRay(ContactPoint.point, contact.normal, Color.white);
	}
}*/

function Update () {
	
    var verticalMovement : float = Input.GetAxis ("Vertical2") * speed;
    var horizontalMovement : float = Input.GetAxis ("Horizontal2") * speed;
    
    // Multiply by delta time
    verticalMovement *= Time.deltaTime;
    horizontalMovement *= Time.deltaTime;
   
    // Move the thing! 
    transform.Translate(horizontalMovement, verticalMovement, 0);
   
	 // A button
    if (Input.GetKeyDown(KeyCode.Joystick2Button16) || Input.GetKeyDown(KeyCode.Joystick2Button0) || Input.GetKey(KeyCode.RightShift)) {
    	if(!hasJumped){
    		Jump();
    		hasJumped = true;
    	}
    }
    
    // X button, 2 and 18
    if (Input.GetKeyDown(KeyCode.Joystick2Button18) || Input.GetKeyDown(KeyCode.Joystick2Button2)) {
    	gameObject.renderer.material.color = Color.yellow;
    }
}

function OnCollisionEnter(collision: Collision){
	for(var contact : ContactPoint in collision.contacts){
		if(contact.otherCollider.name == "BG"){
			print("Player 2 hit the BG!");
			hasJumped = false;
		}
		// Visualize the contact point
		Debug.DrawRay(contact.point, contact.normal, Color.white);
	}
}
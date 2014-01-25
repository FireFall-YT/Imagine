#pragma strict

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
	
    var verticalMovement : float = Input.GetAxis ("Vertical") * speed;
    var horizontalMovement : float = Input.GetAxis ("Horizontal") * speed;
    
    // Multiply by delta time
    verticalMovement *= Time.deltaTime;
    horizontalMovement *= Time.deltaTime;
   
    // Move the thing! 
    transform.Translate(horizontalMovement, verticalMovement, 0);
   
	 // A button
    if (Input.GetKeyDown(KeyCode.Joystick1Button16) || Input.GetKeyDown(KeyCode.Joystick1Button0) || Input.GetKey(jumpKey)) {
    	if(!hasJumped){
    		Jump();
    		hasJumped = true;
    	}
    	//gameObject.renderer.material.color = Color.green;
    }
    
    // X button, 2 and 18
    if (Input.GetKeyDown(KeyCode.Joystick1Button18) || Input.GetKeyDown(KeyCode.Joystick1Button2)) {
    	gameObject.renderer.material.color = Color.yellow;
    }
}

function OnCollisionEnter(collision: Collision){
	for(var contact : ContactPoint in collision.contacts){
		if(contact.otherCollider.tag == "floor" || contact.otherCollider.tag == "platform"){
			print("Player 1 hit the BG!");
			hasJumped = false;
		}
		// Visualize the contact point
		Debug.DrawRay(contact.point, contact.normal, Color.white);
	}
}
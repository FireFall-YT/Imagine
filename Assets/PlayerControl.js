#pragma strict

var speed : float = 10.0;

function Update () {

    var verticalMovement : float = Input.GetAxis ("Vertical") * speed;
    var horizontalMovement : float = Input.GetAxis ("Horizontal") * speed;
    
    // Multiply by delta time
    verticalMovement *= Time.deltaTime;
    horizontalMovement *= Time.deltaTime;
   
    // Move the thing! 
    transform.Translate(horizontalMovement, verticalMovement, 0);
   
	
	 // A button
    if (Input.GetKeyDown(KeyCode.Joystick1Button16) || Input.GetKeyDown(KeyCode.Joystick1Button0)) {
    	gameObject.renderer.material.color = Color.green;
    }
    
    // X button, 2 and 18
    if (Input.GetKeyDown(KeyCode.Joystick1Button18) || Input.GetKeyDown(KeyCode.Joystick1Button2)) {
    	gameObject.renderer.material.color = Color.yellow;
    }
}
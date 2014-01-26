#pragma strict

function Start () {

}

var speed : float = 10.0;
var rotationSpeed : float = 100.0;
 
function Update () {
    // Get the horizontal and vertical axis.
    // By default they are mapped to the arrow keys.
    // The value is in the range -1 to 1
    var translation : float = Input.GetAxis ("Vertical") * speed;
    var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
 
    // Make it move 10 meters per second instead of 10 meters per frame...
    translation *= Time.deltaTime;
    rotation *= Time.deltaTime;
 
    // Move translation along the object's z-axis
    transform.Translate (0, translation, 0);
    // Rotate around our y-axis
    transform.Rotate (0, rotation, 0);
    
    // A button
    if (Input.GetKeyDown(KeyCode.Joystick1Button16) || Input.GetKeyDown(KeyCode.Joystick1Button0)) {
    	gameObject.renderer.material.color = Color.green;
    }
    
    // X button, 2 and 18
    if (Input.GetKeyDown(KeyCode.Joystick1Button18) || Input.GetKeyDown(KeyCode.Joystick1Button2)) {
    	gameObject.renderer.material.color = Color.yellow;
    }
    
}
var speed : float = 5.0;
var jumpSpeed : float = 400.0;
var hasJumped : boolean = false;
var animator : Animator;

// jump timer
var jumpTimer : int = 0; //When triggered, set to 10



// Animation Tag Strings
var upAnim : String;
var downAnim : String;
var	leftAnim : String;
var rightAnim : String;
var idleUpAnim : String;
var idleDownAnim : String;
var idleLeftAnim : String;
var idleRightAnim : String;

var lastAnim : String;

var jumpKey : KeyCode;
var attackKey : KeyCode;

var hasWeapon : boolean = false;
var weap : GameObject;

var verticalString : String;
var horizontalString : String;
var playerNum : int;

var jumpKeyMac : KeyCode;
var jumpKeyWindows : KeyCode;

var attackKeyMac : KeyCode;
var attackKeyWindows : KeyCode;

function Jump(){
	rigidbody.AddForce(Vector3.up * jumpSpeed);
	jumpTimer = 10;
}

function Start() {
	animator = gameObject.GetComponent("Animator");
	weap.renderer.enabled = false;
    weap.collider.enabled = false;
    hasWeapon = false;
}

function Update () {

	if(jumpTimer >0) jumpTimer--;
	
	 var verticalMovement : float = Input.GetAxis (verticalString) * speed;
    var horizontalMovement : float = Input.GetAxis (horizontalString) * speed;
    
    // Move the thing! 
    rigidbody.velocity.z = verticalMovement;
    rigidbody.velocity.x = horizontalMovement;
   
	 // A button
    if (Input.GetKeyDown(jumpKeyMac) || Input.GetKeyDown(jumpKeyWindows) || Input.GetKey(jumpKey)) {
    	if(!hasJumped  && jumpTimer <= 0){
    		Jump();
    		hasJumped = true;
    	}
    }
    
    // X button, 2 (Windows) and 18 (Mac)
    if (Input.GetKeyDown(attackKeyMac) || Input.GetKeyDown(attackKeyWindows) || Input.GetKeyDown(attackKey)) {
   		weap.renderer.enabled = true;
    	weap.collider.enabled = true;
    	hasWeapon = true;    
    }
    
    if (Input.GetKeyUp(attackKeyMac) || Input.GetKeyUp(attackKeyWindows) || Input.GetKeyUp(attackKey)) {	
    	weap.renderer.enabled = false;
    	weap.collider.enabled = false;
    	hasWeapon = false;
    }
    
    // Animation
    if(rigidbody.velocity.z != 0 && rigidbody.velocity.x != 0){
    	if(rigidbody.velocity.z > 0 && rigidbody.velocity.x > 0 && !animator.GetCurrentAnimatorStateInfo(0).IsName(upAnim)){
    		animator.Play(upAnim, 0, 1);
    		lastAnim = upAnim;
    	}else if(rigidbody.velocity.z < 0 && rigidbody.velocity.x > 0 && !animator.GetCurrentAnimatorStateInfo(0).IsName(downAnim)){
    		animator.Play(downAnim, 0, 1);
    		lastAnim = downAnim;
    	}else if(rigidbody.velocity.z < 0 && rigidbody.velocity.x < 0 && !animator.GetCurrentAnimatorStateInfo(0).IsName(downAnim)){
    		animator.Play(downAnim, 0, 1);
    		lastAnim = downAnim;
    	}else if(rigidbody.velocity.z > 0 && rigidbody.velocity.x < 0 && !animator.GetCurrentAnimatorStateInfo(0).IsName(upAnim)){
    		animator.Play(upAnim, 0, 1);
    		lastAnim = upAnim;
    	}
    }else{
    	if(rigidbody.velocity.z > 0 && !animator.GetCurrentAnimatorStateInfo(0).IsName(upAnim)){
    		animator.Play(upAnim, 0, 1);
    		lastAnim = upAnim;
    	}else if(rigidbody.velocity.z < 0 && !animator.GetCurrentAnimatorStateInfo(0).IsName(downAnim)){
    		animator.Play(downAnim, 0, 1);
    		lastAnim = downAnim;
    	}else if(rigidbody.velocity.x < 0 && !animator.GetCurrentAnimatorStateInfo(0).IsName(leftAnim)){
    		animator.Play(leftAnim, 0, 1);
    		lastAnim = leftAnim;
    	}else if(rigidbody.velocity.x > 0 && !animator.GetCurrentAnimatorStateInfo(0).IsName(rightAnim)){
    		animator.Play(rightAnim, 0, 1);
    		lastAnim = rightAnim;
    	}
    }
    
    if(rigidbody.velocity.x == 0 && rigidbody.velocity.z == 0){
    	switch(lastAnim){
    		case upAnim:
    			animator.Play(idleUpAnim, 0, 1);
    			break;
    		case downAnim:
    			animator.Play(idleDownAnim, 0, 1);
    			break;
    		case leftAnim:
    			animator.Play(idleLeftAnim, 0, 1);
    			break;
    		case rightAnim:
    			animator.Play(idleRightAnim, 0, 1);
    			break;
    		default:
    			break;
    	}
    }
}

function OnCollisionEnter(collision: Collision){
	for(var contact : ContactPoint in collision.contacts){
		if(contact.otherCollider.tag == "floor" || contact.otherCollider.tag == "platform"
		  || contact.otherCollider.tag == "Tile"){
			hasJumped = false;
		}
		
		
		// Visualize the contact point
		Debug.DrawRay(contact.point, contact.normal, Color.white);
	}
}
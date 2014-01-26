using UnityEngine;
using System.Collections;

public class ProjectileScript : MonoBehaviour {

	//speed of the projectile
	public int speed = 4;

	//beginning point
	public Vector3 startPoint = new Vector3(0, 0, 0);

	//end point
	public Vector3 endPoint = new Vector3(0, 0, 0);

	//movement vector
	public Vector3 movement = new Vector3(0, 0, 0);

	//The scripter is expected to assign values to the 
	//start and end point themselves, as the default values are 0

	// Use this for initialization
	void Start () {
		movement = endPoint - startPoint; //get the movement vector
		movement = Vector3.Normalize(movement); // then normalize it
		movement = movement * speed; //speed it up

		// rotate fireball by angle of movement vector
		float angle = Vector3.Angle(startPoint, endPoint);
		Transform trans = gameObject.GetComponent<Transform>();
		float yRotation = trans.rotation.y;
		float xRotation = trans.rotation.x;
		yRotation = angle;

		Destroy(gameObject, 10);

		//xRotation = 90;
	}

	void Update(){

	}

	// Update is called once per frame
	void FixedUpdate () {
		rigidbody.velocity = movement; //set velocity to movement
	}

	public bool isProjectile(){
		return true;
	}
	
}

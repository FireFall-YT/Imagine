using UnityEngine;
using System.Collections;

public class HealthScript : MonoBehaviour {
	//default health
	public int health = 1;
	//Default value for the object being a player
	public bool isPlayer = false;

	// last stable position on a tile
	Vector3 lastPos = new Vector3(0, 0, 0);

	private int startHealth;

	private int timer = 60;

	// Use this for initialization
	void Start () {
		startHealth = health;
	}
	
	// Update is called once per frame
	void Update () {
		if(health <= 0){
			if(gameObject.CompareTag("Player")){
				//revive player somewhere else

				var playerTrans = gameObject.GetComponent<Transform>();

				playerTrans.position = lastPos;
				float zBuffer = playerTrans.position.z;

				zBuffer += 3;

				health = startHealth;


			} else{
				Destroy(gameObject);

			}
		}


		if(timer > 0) timer--;
		else timer = 60;

	}

	void onCollisionEnter(Collider collision){
		if(collision.gameObject.tag == "Tile"/* && timer == 0*/){
			var thisPos = gameObject.GetComponent<Transform>();
			lastPos = thisPos.position;
		}
	}
}

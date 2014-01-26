using UnityEngine;
using System.Collections;

public class HealthScript : MonoBehaviour {
	//default health
	public int health = 1;
	//Default value for the object being a player
	public bool isPlayer = false;


	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(health <= 0){
			if(gameObject.CompareTag("Player")){
				//revive player somewhere else

			} else{
				Destroy(gameObject);

			}
		}
	}
}

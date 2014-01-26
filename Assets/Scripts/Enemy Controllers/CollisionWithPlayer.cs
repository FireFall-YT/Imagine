using UnityEngine;
using System.Collections;

public class CollisionWithPlayer : MonoBehaviour {

	void OnTriggerEnter(Collider collider){
		HealthScript healthScript = collider.gameObject.GetComponent<HealthScript>(); //Check if the target has a healthScript
		if(healthScript != null){

			if(healthScript.isPlayer){ //checks if it's a player

				//Then decrease player's health by 1
				healthScript.health -= 1;
				
				//Then destroy the object if it's a projectile
				ProjectileScript pScript = gameObject.GetComponent<ProjectileScript>();
				if(pScript != null) {
					if(pScript.isProjectile()){
						
						Destroy(gameObject);
					}
				}
			}


		}


		

	}
}

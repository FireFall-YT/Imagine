using UnityEngine;
using System.Collections;

public class DeathUponCollision : MonoBehaviour {

	void OnTriggerEnter(Collider collider){
		HealthScript healthScript = collider.gameObject.GetComponent<HealthScript>(); //Check if the target has a healthScript
		if(healthScript != null){
			
			//Set healthScript to 0
			healthScript.health = 0;
			
			
		}
		
		
		
		
	}
}

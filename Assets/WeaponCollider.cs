using UnityEngine;
using System.Collections;

public class WeaponCollider : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter(Collider collider){
		if (collider.CompareTag("enemy")) {
			HealthScript healthScript = collider.gameObject.GetComponent<HealthScript>();
			healthScript.health -= 1;
		}
	}

}

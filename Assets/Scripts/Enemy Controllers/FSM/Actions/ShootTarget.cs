using UnityEngine;
using System.Collections;

public class ShootTarget :  IAction {

	public Vector3 getMove(GameObject gameObject){
		var player1 = GameObject.Find("Player1");
		Vector3 player1Pos = new Vector3(0, 0, 0);
		var player2 = GameObject.Find("Player2");
		Vector3 player2Pos = new Vector3(0, 0, 0);
		if(player1 != null){
			player1Pos = GameObject.Find("Player1").GetComponent<Transform>().position;
		}
		if(player2 != null){
			player2Pos = GameObject.Find("Player2").GetComponent<Transform>().position;
		}
		if(player1 == null && player2 == null) return new Vector3(0, 0, 0);

		Vector3 thisPos = gameObject.GetComponent<Transform>().position;
		
		Vector3 currentVec = new Vector3(0, 0, 0);
		if(player1 != null && player2 != null){
			if(Vector3.Distance(thisPos, player1Pos) <= Vector3.Distance(thisPos, player2Pos)){
				currentVec = player1Pos;
			} else {
				currentVec = player2Pos;
			}
		}
		if(player1 != null && player2 == null){
			currentVec = player1Pos;
		}
		if(player1 == null && player2 != null){
			currentVec = player2Pos;
		}


		if(player1 != null || player2 != null){
			
			// Create a new shot
			
			GameObject Fireball = gameObject.GetComponent<ProjectileHolder>().Fireball;
			
			GameObject shot = GameObject.Instantiate(Fireball) as GameObject;
			
			// Assign position
			Transform shotTrans = shot.GetComponent<Transform>();
			if(shotTrans != null) shotTrans.position = thisPos;
			
			ProjectileScript proj = shot.GetComponent<ProjectileScript>();
			if(proj != null){
				proj.startPoint = thisPos;
				proj.endPoint = currentVec;
			}
		} 
		
		
		return new Vector3(0,0,0);
	}

}

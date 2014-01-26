using UnityEngine;
using System.Collections;

public class Timer : ICondition {

	public int startTime; //The start time for the timer
	private int timeLeft; //timeleft starts as the starttime

	public Timer(int sTime){
		this.startTime = sTime;
		this.timeLeft = sTime;
	}



	public bool test(GameObject gameObject){
		timeLeft--;
		//Debug.Log(timeLeft);
		if(timeLeft <= 0){
			timeLeft = startTime; //if 0 or below, reset
			return true; // return true for the timer going off
		}
		else 
			return false;
	}
}

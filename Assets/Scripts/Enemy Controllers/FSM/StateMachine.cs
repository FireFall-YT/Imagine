using UnityEngine;
using System.Collections.Generic;

public class StateMachine{

	public State CurrentState;
	
	// Update is called once per frame
	public void Update (GameObject gameObject) {
		Transition triggeredTrans = new Transition();
		bool transitionTriggered = false; 

		foreach(Transition trans in CurrentState.getTransitions()){
			if(trans.isTriggered(gameObject)){
				triggeredTrans = trans;
				transitionTriggered = true;
				break;
			}
		}

		if(transitionTriggered) CurrentState = triggeredTrans.getTargetState();

	}
	

	public void setCurrentState(State state) {
		this.CurrentState = state;
	}
}

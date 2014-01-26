using UnityEngine;
using System.Collections.Generic;

public class Transition {

	//State the transition goes to
	public State targetState;

	//Condition that is tested to go to the target state
	public ICondition condition;

	//returns the target state
	public State getTargetState() {
		return targetState;
	}

	public ICondition getCondition(){
		return condition;
	}

	public bool isTriggered(GameObject gameObject){
		return condition.test(gameObject);

	}
}

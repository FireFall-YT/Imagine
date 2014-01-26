using UnityEngine;
using System.Collections.Generic;

public class State {

	// The action associated with the state
	public IAction action;
	
	//The List of transitions to other states
	public List<Transition> transitions = new List<Transition>();
	
	//The name of the state
	public string name;
	
	//returns the state's associated action
	public IAction getAction(){
		return action;
	}

	//returns the List of transitions to other states
	public List<Transition> getTransitions() {
		return this.transitions;
	}

	public void setTransitions( List<Transition> trans) {
		this.transitions = new List<Transition>( trans);
	}
	//returns the name of the state
	public string getName(){
		return name;
	}
	
}

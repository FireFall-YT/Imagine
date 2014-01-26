using UnityEngine;
using System.Collections.Generic;

public class DargonEnemyMovementController : MonoBehaviour {

	// movement
	private Vector3 movement = new Vector3(0, 0, 0);

	private StateMachine FSM = new StateMachine();

	private State chase = new State();
	private List<Transition> chaseList = new List<Transition>();
	private ChaseTarget chaseTarget = new ChaseTarget();
	private Transition chaseToWait = new Transition();
	private Timer chaseTimer = new Timer(20);

	private State shoot = new State();
	private List<Transition> shootList = new List<Transition>();
	private ShootTarget shootTarget = new ShootTarget();
	private Transition shootToChase = new Transition();
	private Timer shootTimer = new Timer(1);

	private State wait = new State();
	private List<Transition> waitList = new List<Transition>();
	private Wait waiting = new Wait();
	private Transition waitToShoot = new Transition();
	private Timer waitTimer = new Timer(60);




	void Start(){
		chase.action = chaseTarget;
		chaseToWait.condition = chaseTimer;
		chaseToWait.targetState = wait;
		chaseList.Add(chaseToWait);
		chase.setTransitions(chaseList);

		shoot.action = shootTarget;
		shootToChase.condition = shootTimer;
		shootToChase.targetState = chase;
		shootList.Add(shootToChase);
		shoot.setTransitions(shootList);

		wait.action = waiting;
		waitToShoot.condition = waitTimer;
		waitToShoot.targetState = shoot;
		waitList.Add(waitToShoot);
		wait.setTransitions(waitList);

		FSM.CurrentState = chase;
	}
	
	// Update is called once per frame
	void Update () {

		if(FSM != null){
			//Update FSM
			FSM.Update(this.gameObject);
			// movement received from FSM
			movement = FSM.CurrentState.getAction().getMove(gameObject);
		}
		
	}
	
	void FixedUpdate(){
		rigidbody.velocity = movement;
	}
}

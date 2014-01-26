using UnityEngine;
using System.Collections;

public interface IAction {

	//Does an action
	Vector3 getMove(GameObject gameObject);
}

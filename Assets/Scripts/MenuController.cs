using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class MenuController : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	/*
	 * link do tutorial de como fazer menu:
	 * https://www.youtube.com/watch?v=PEmNMI1JUvI
	 * 
	 */

	public void bt_start() {
		Application.LoadLevel("MainScenes");
	}

	public void bt_option() {
		Debug.Log("Para abrir a tela de opções");
	}

	public void bt_exit() {
		Debug.Log("para sair do jogo");
		Application.Quit ();
	}
}

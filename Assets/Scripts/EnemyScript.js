 // Public variable that contains the speed of the enemy
public var speed : int = -5;
private static var conta_sucesso : int = 0;
private static var conta_dano : int = 0;
private var conta_sucesso_t : TextMesh;
private var conta_dano_t : TextMesh;


// Function called when the enemy is created
function Start () {
    // Get the rigidbody component
    var r2d = GetComponent("Rigidbody2D");

    // Add a vertical speed to the enemy
    r2d.velocity.y = speed;

    // Make the enemy rotate on itself
    r2d.angularVelocity = Random.Range(-200, 200);
    conta_sucesso_t = GameObject.Find("conta_sucesso").GetComponent(TextMesh);
	conta_dano_t = GameObject.Find("conta_dano").GetComponent(TextMesh);
}

// Function called when the object goes out of the screen
function OnBecameInvisible() {
    // Destroy the enemy
    Destroy(gameObject);
} 

 // Function called when the enemy collides with another object
function OnTriggerEnter2D(obj) {
	// testando geração de valroes aletório com js.
	//val = Random.Range(0, 10);

	// Name of the object that collided with the enemy
    var name = obj.gameObject.name;

    // If the enemy collided with a bullet
    if (name == "bullet(Clone)") {
        // Destroy itself (the enemy) and the bullet
        Destroy(gameObject);
        Destroy(obj.gameObject);
        conta_sucesso++;
        conta_sucesso_t.text = "pontos: " + conta_sucesso;
        Debug.Log("acertos = " + conta_sucesso);
     }

    // If the enemy collided with the spaceship
    if (name == "spaceship") {
    	conta_dano++;
    	conta_dano_t.text = "dano: " + conta_dano;
    	Debug.Log("dano = " + conta_dano);
        // Destroy itself (the enemy) to keep things simple
        Destroy(gameObject);
    }
} 
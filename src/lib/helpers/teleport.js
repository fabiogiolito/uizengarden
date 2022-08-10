// https://svelte.dev/repl/2122ac70a8494ff4a6fca4ba61b512be?version=3.42.4
// node is a reference to whatever div with attribute use:teleport 
// name param is the parent component identifier we pass into attribute use:teleport={___} 
export function teleport(node, name = 'teleport-container') {
  let teleportContainer = document.getElementById(name);

  // appendChild will move the node reference from previous location to teleportContainer
  teleportContainer?.appendChild(node);

   // Move focus to teleport container so you can tab through teleported content
  teleportContainer.focus();

  return {
    // destroy() {
    //   node.remove();
    // }
  }
}

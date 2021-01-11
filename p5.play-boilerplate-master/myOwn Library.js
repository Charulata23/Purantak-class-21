function isTouching( object1, object2){
    if (object1.x -  object2 <  object2 + object1.width/2
      &&  object2 - object1.x <  object2.width/2 + object1.width/2
      && object1.y - fixedRect.y <  object2.height/2 + object1.height/2
      &&  object2.y - object1.y <  object2.height/2 + object1.height/2) {
   return true;
  }
  else 
    return false;
  } 
function TestRagdoll() {var water_height_percent=parseInt(document.getElementById('water_height').value)/100;var oldvalue;
var   b2Vec2 = Box2D.Common.Math.b2Vec2,  b2AABB = Box2D.Collision.b2AABB,	b2BodyDef = Box2D.Dynamics.b2BodyDef,	b2Body = Box2D.Dynamics.b2Body,	b2FixtureDef = Box2D.Dynamics.b2FixtureDef,	b2Fixture = Box2D.Dynamics.b2Fixture,	b2World = Box2D.Dynamics.b2World,	b2MassData = Box2D.Collision.Shapes.b2MassData,	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,	b2DebugDraw = Box2D.Dynamics.b2DebugDraw,   b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef,   b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef
 ,  b2BuoyancyController=Box2D.Dynamics.Controllers.b2BuoyancyController
;var world = new b2World(new b2Vec2(0, 10),
    true);var fixDef = new b2FixtureDef;
fixDef.density = 1.0;fixDef.friction = 0.5;fixDef.restitution = 0.2;
var bodyDef = new b2BodyDef;var canvas_height = document.getElementById('canvas').clientHeight;
var canvas_width = document.getElementById('canvas').clientWidth;bodyDef.type = b2Body.b2_staticBody;fixDef.shape = new b2PolygonShape;fixDef.shape.SetAsBox(canvas_width/30/2, 2);bodyDef.position.Set(canvas_width/30/2,  canvas_height/ 30 + 1.8);world.CreateBody(bodyDef).CreateFixture(fixDef);bodyDef.position.Set(canvas_width/30/2, -1.8);world.CreateBody(bodyDef).CreateFixture(fixDef);fixDef.shape.SetAsBox(2, canvas_height/30/2);bodyDef.position.Set(-1.8, canvas_height/30/2);world.CreateBody(bodyDef).CreateFixture(fixDef);bodyDef.position.Set( canvas_width/ 30 +1.8, canvas_height/ 30/2);world.CreateBody(bodyDef).CreateFixture(fixDef);var m_physScale=30;
var fuliController;function createController() {fuliController = new b2BuoyancyController();fuliController.normal.Set(0, -1);fuliController.offset = -canvas_height*(1-water_height_percent) / m_physScale;fuliController.density = 5.0;
fuliController.linearDrag = 10;fuliController.angularDrag = 6;
world.AddController(fuliController);var bodyList = world.GetBodyList();while (bodyList) {var body = bodyList.GetUserData();fuliController.AddBody(bodyList);bodyList = bodyList.GetNext();}}
for (var i = 0; i < 10; i++){var startX = canvas_width/10*i + Math.random() * 20;var startY = 20 + Math.random() * 50;bodyDef.type = b2Body.b2_dynamicBody;circ = new b2CircleShape( 12.5 / m_physScale );fixDef.shape = circ;fixDef.density = 1.0+i;fixDef.friction = 0.4;fixDef.restitution = 0.3;bodyDef.position.Set(startX / m_physScale, startY / m_physScale);
var head = world.CreateBody(bodyDef);head.CreateFixture(fixDef);head.ApplyImpulse(new b2Vec2(Math.random() * 100 - 50, Math.random() * 100 - 50), head.GetWorldCenter());
box = new b2PolygonShape();box.SetAsBox(15 / m_physScale, 10 / m_physScale);fixDef.shape = box;fixDef.density = 1.0+i;fixDef.friction = 0.4;fixDef.restitution = 0.1;bodyDef.position.Set(startX / m_physScale, (startY + 28) / m_physScale);var torso1 = world.CreateBody(bodyDef);torso1.CreateFixture(fixDef);box = new b2PolygonShape();box.SetAsBox(15 / m_physScale, 10 / m_physScale);fixDef.shape = box;bodyDef.position.Set(startX / m_physScale, (startY + 43) / m_physScale);var torso2 = world.CreateBody(bodyDef);torso2.CreateFixture(fixDef);box.SetAsBox(15 / m_physScale, 10 / m_physScale);fixDef.shape = box;bodyDef.position.Set(startX / m_physScale, (startY + 58) / m_physScale);var torso3 = world.CreateBody(bodyDef);torso3.CreateFixture(fixDef);fixDef.density = 1.0+i;fixDef.friction = 0.4;fixDef.restitution = 0.1;box = new b2PolygonShape();box.SetAsBox(18 / m_physScale, 6.5 / m_physScale);fixDef.shape = box;bodyDef.position.Set((startX - 30) / m_physScale, (startY + 20) / m_physScale);var upperArmL= world.CreateBody(bodyDef);upperArmL.CreateFixture(fixDef);box = new b2PolygonShape();box.SetAsBox(18 / m_physScale, 6.5 / m_physScale);fixDef.shape = box;bodyDef.position.Set((startX + 30) / m_physScale, (startY + 20) / m_physScale);var upperArmR= world.CreateBody(bodyDef);upperArmR.CreateFixture(fixDef);fixDef.density = 1.0+i;fixDef.friction = 0.4;fixDef.restitution = 0.1;box = new b2PolygonShape();box.SetAsBox(17 / m_physScale, 6 / m_physScale);fixDef.shape = box;bodyDef.position.Set((startX - 57) / m_physScale, (startY + 20) / m_physScale);var lowerArmL= world.CreateBody(bodyDef);lowerArmL.CreateFixture(fixDef);box = new b2PolygonShape();box.SetAsBox(17 / m_physScale, 6 / m_physScale);fixDef.shape = box;bodyDef.position.Set((startX + 57) / m_physScale, (startY + 20) / m_physScale);var lowerArmR= world.CreateBody(bodyDef);lowerArmR.CreateFixture(fixDef);fixDef.density = 1.0+i;fixDef.friction = 0.4;fixDef.restitution = 0.1;box = new b2PolygonShape();box.SetAsBox(7.5 / m_physScale, 22 / m_physScale);fixDef.shape = box;bodyDef.position.Set((startX - 8) / m_physScale, (startY + 85) / m_physScale);
var upperLegL= world.CreateBody(bodyDef);upperLegL.CreateFixture(fixDef);box = new b2PolygonShape();box.SetAsBox(7.5 / m_physScale, 22 / m_physScale);fixDef.shape = box;
bodyDef.position.Set((startX + 8) / m_physScale, (startY + 85) / m_physScale);
var upperLegR= world.CreateBody(bodyDef);upperLegR.CreateFixture(fixDef);fixDef.density = 1.0+i;fixDef.friction = 0.4;fixDef.restitution = 0.1;box = new b2PolygonShape();box.SetAsBox(6 / m_physScale, 20 / m_physScale);fixDef.shape = box;bodyDef.position.Set((startX - 8) / m_physScale, (startY + 120) / m_physScale);
var lowerLegL= world.CreateBody(bodyDef);lowerLegL.CreateFixture(fixDef);box = new b2PolygonShape();box.SetAsBox(6 / m_physScale, 20 / m_physScale);fixDef.shape = box;bodyDef.position.Set((startX + 8) / m_physScale, (startY + 120) / m_physScale);var lowerLegR= world.CreateBody(bodyDef);lowerLegR.CreateFixture(fixDef);
var jd = new b2RevoluteJointDef();jd.enableLimit = true;jd.lowerAngle = -40 / (180/Math.PI);jd.upperAngle = 40 / (180/Math.PI);jd.Initialize(torso1, head, new b2Vec2(startX / m_physScale, (startY + 15) / m_physScale));
world.CreateJoint(jd);jd.lowerAngle = -85 / (180/Math.PI);jd.upperAngle = 130 / (180/Math.PI);jd.Initialize(torso1, upperArmL, new b2Vec2((startX - 18) / m_physScale, (startY + 20) / m_physScale));world.CreateJoint(jd);jd.lowerAngle = -130 / (180/Math.PI);jd.upperAngle = 85 / (180/Math.PI);jd.Initialize(torso1, upperArmR, new b2Vec2((startX + 18) / m_physScale, (startY + 20) / m_physScale));world.CreateJoint(jd);jd.lowerAngle = -130 / (180/Math.PI);jd.upperAngle = 10 / (180/Math.PI);jd.Initialize(upperArmL, lowerArmL, new b2Vec2((startX - 45) / m_physScale, (startY + 20) / m_physScale));world.CreateJoint(jd);jd.lowerAngle = -10 / (180/Math.PI);jd.upperAngle = 130 / (180/Math.PI);jd.Initialize(upperArmR, lowerArmR, new b2Vec2((startX + 45) / m_physScale, (startY + 20) / m_physScale));world.CreateJoint(jd);jd.lowerAngle = -15 / (180/Math.PI);jd.upperAngle = 15 / (180/Math.PI);jd.Initialize(torso1, torso2, new b2Vec2(startX / m_physScale, (startY + 35) / m_physScale));world.CreateJoint(jd);jd.Initialize(torso2, torso3, new b2Vec2(startX / m_physScale, (startY + 50) / m_physScale));world.CreateJoint(jd);jd.lowerAngle = -25 / (180/Math.PI);jd.upperAngle = 45 / (180/Math.PI);jd.Initialize(torso3, upperLegL, new b2Vec2((startX - 8) / m_physScale, (startY + 72) / m_physScale));world.CreateJoint(jd);jd.lowerAngle = -45 / (180/Math.PI);jd.upperAngle = 25 / (180/Math.PI);jd.Initialize(torso3, upperLegR, new b2Vec2((startX + 8) / m_physScale, (startY + 72) / m_physScale));world.CreateJoint(jd);jd.lowerAngle = -25 / (180/Math.PI);jd.upperAngle = 115 / (180/Math.PI);jd.Initialize(upperLegL, lowerLegL, new b2Vec2((startX - 8) / m_physScale, (startY + 105) / m_physScale));world.CreateJoint(jd);jd.lowerAngle = -115 / (180/Math.PI);jd.upperAngle = 25 / (180/Math.PI);jd.Initialize(upperLegR, lowerLegR, new b2Vec2((startX + 8) / m_physScale, (startY + 105) / m_physScale));world.CreateJoint(jd);}bodyDef.type = b2Body.b2_staticBody;fixDef.density = 0.0;fixDef.friction = 0.4;fixDef.restitution = 0.3;
for (var j = 1; j <= 10; j++) {box = new b2PolygonShape();box.SetAsBox((10*j) / m_physScale, 10 / m_physScale);fixDef.shape = box;bodyDef.position.Set((10*j) / m_physScale, (canvas_height -200 + 20*j) / m_physScale);head = world.CreateBody(bodyDef);head.CreateFixture(fixDef);
}for (var k = 1; k <= 10; k++){box = new b2PolygonShape();box.SetAsBox((10 * k) / m_physScale, 10 / m_physScale);fixDef.shape = box;bodyDef.position.Set((canvas_width-10*k) / m_physScale, (canvas_height -200 + 20*k) / m_physScale);head = world.CreateBody(bodyDef);head.CreateFixture(fixDef);
}bodyDef.type = b2Body.b2_staticBody;fixDef.shape = new b2PolygonShape;
fixDef.shape.SetAsBox(
     150/m_physScale
  ,  3/m_physScale);bodyDef.position.x = canvas_width/m_physScale/2;bodyDef.position.y = canvas_height/m_physScale/2;world.CreateBody(bodyDef).CreateFixture(fixDef);bodyDef.position.x = canvas_width/m_physScale/4;bodyDef.position.y = canvas_height/m_physScale/4;world.CreateBody(bodyDef).CreateFixture(fixDef);bodyDef.type = b2Body.b2_dynamicBody;fixDef.density = 10.0;fixDef.friction = 0.5;fixDef.restitution = 0.2;
for(var gf = 0; gf < 5; ++gf)
{if(Math.random() > 0.5)
{fixDef.shape = new b2PolygonShape;fixDef.shape.SetAsBox(Math.random() + 0.1,  Math.random() + 0.1);
} else
{fixDef.shape = new b2CircleShape(Math.random() + 0.1);}bodyDef.position.x = Math.random() * 10;
bodyDef.position.y = Math.random() * 10;
world.CreateBody(bodyDef).CreateFixture(fixDef);
}createController();var debugDraw = new b2DebugDraw();debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));debugDraw.SetDrawScale(30.0);debugDraw.SetFillAlpha(0.5);debugDraw.SetLineThickness(1.0);debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);world.SetDebugDraw(debugDraw);
window.setInterval(update, 1000 / 60);var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
var canvasPosition = getElementPosition(document.getElementById("canvas"));
function handleMouseDown(e)
{
isMouseDown = true;
handleMouseMove(e);
document.addEventListener("mousemove", handleMouseMove, true);document.addEventListener("touchmove", handleMouseMove, true);}document.addEventListener("mousedown", handleMouseDown, true);document.addEventListener("touchstart", handleMouseDown, true);
function handleMouseUp() {isMouseDown = false;mouseX = undefined;mouseY = undefined;
document.removeEventListener("mousemove", handleMouseMove, true);document.removeEventListener("touchmove", handleMouseMove, true);}document.addEventListener("mouseup", handleMouseUp, true);document.addEventListener("touchend", handleMouseUp, true);
function handleMouseMove(e)
{var clientX, clientY;
if(e.clientX)
{clientX = e.clientX;clientY = e.clientY;
} else if(e.changedTouches && e.changedTouches.length > 0) {var touch = e.changedTouches[e.changedTouches.length - 1];clientX = touch.clientX;clientY = touch.clientY;} else
{return;}mouseX = (clientX - canvasPosition.x) / 30;
e.preventDefault();}function getBodyAtMouse() {mousePVec = new b2Vec2(mouseX, mouseY);
var aabb = new b2AABB();aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);selectedBody = null;
world.QueryAABB(getBodyCB, aabb);}function getBodyCB(fixture) {if(fixture.GetBody().GetType() !== b2Body.b2_staticBody) {if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec))
   {selectedBody = fixture.GetBody();return false;
   }}return true;
}function update()
{if(isMouseDown && (!mouseJoint))
{var body = getBodyAtMouse();
   if(body) {
      var md = new b2MouseJointDef();md.bodyA = world.GetGroundBody();md.bodyB = body;md.target.Set(mouseX, mouseY);md.collideConnected = true;md.maxForce = 300.0 * body.GetMass();mouseJoint = world.CreateJoint(md);body.SetAwake(true);
   }}if(mouseJoint)
{if(isMouseDown) {
      mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
   } else {
      world.DestroyJoint(mouseJoint);
      mouseJoint = null;
   }}world.Step(1 / 60, 10, 10);world.DrawDebugData();world.ClearForces();water_height_percent=parseInt(document.getElementById('water_height').value)/100;
if (water_height_percent<=1 && water_height_percent>=0)
{fuliController.offset = -canvas_height * (1 - water_height_percent) / m_physScale;
   var context=document.getElementById("canvas").getContext("2d")
   context.fillStyle = "rgba(20, 100, 255, 0.3)";
   context.fillRect(0, canvas_height * (1 - water_height_percent), canvas_width, canvas_height);
   oldvalue=parseInt(document.getElementById('water_height').value)
}}function getElementPosition(element) {var elem=element, tagname="", x=0, y=0;
while((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined"))
{  y += elem.offsetTop;x += elem.offsetLeft;tagname = elem.tagName.toUpperCase();
   if(tagname === "BODY") elem=0;
   if(typeof(elem) == "object") {if(typeof(elem.offsetParent) == "object")
         elem = elem.offsetParent;}}return {x: x, y: y};}}
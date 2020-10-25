+++
title = "Anchor the camera from the player to fixed points"
description = "Learn to anchor the camera from the player to specific points of the screen with potentially  different zoom levels and in a smooth movement."
author = "raformatico"
coAuthors = ["nathan"]

date = 2020-10-25
weight = 5

difficulty = "beginner"
keywords = ["godot camera anchor"]

+++

In this tutorial, you will learn to make a camera zoom smoothly in 2D using tween animation. We will code a camera that can zoom using the mouse wheel with a minimum and maximum zoom level.

{{< video "videos/anchor-camera.mp4" >}}

You can find the full project [here](https://github.com/GDQuest/godot-mini-tuts-demos/tree/master/2d/anchor-camera).

## Setting up the Scene

First, we need to create a new scene with a _Camera2D_ as its root. Name it _ZoomingCamera2D_ and add a _Tween_ node as a child.

![Zoom Scene Tree](images/camera_scene.png)

In the _Inspector_, set the camera node as _Current_ so Godot uses it as our game's camera. The active camera is always the last one that set its `current` property to `true`.

![Inspector of ZoomingCamera2D](images/camera_inspector.png)

## Input actions

Below, you will see we have some input actions we defined in the _Project -> Project Settings... -> Input Map_. Three are related to movement and two map the mouse wheel button to zooming in and out.

![Screenshot of the input map window with the actions](images/input_map.png)

## Attaching the camera to a Player scene

We designed a player-controlled ship to test our camera for this small demo. It's a `KinematicBody2D` node with the following code attached to it:

```gdscript
# Ship that rotates and moves forward, similar to classics like Asteroid.
class_name Player
extends KinematicBody2D

export var speed := 250
export var angular_speed := 2.0


func _physics_process(delta):
	# Calculation of the direction to rotate.
	var direction := Input.get_action_strength("right") - Input.get_action_strength("left")
	var velocity = Input.get_action_strength("move") * transform.x * speed
	rotation += direction * angular_speed * delta
	move_and_slide(velocity)
```

Finally, to get the camera and its zoom centered in the _Player_, the _ZoomingCamera2D_ should be a child of our _Player_.

![Inspector of ZoomingCamera2D](images/player_scene.png)

## Coding the zoom

Attach a new script to _ZoomingCamera2D_. Let's define some properties to control the camera's zoom range and speed.

```gdscript
class_name ZoomingCamera2D
extends Camera2D

# Lower cap for the `_zoom_level`.
export var min_zoom := 0.5
# Upper cap for the `_zoom_level`.
export var max_zoom := 2.0
# Controls how much we increase or decrease the `_zoom_level` on every turn of the scroll wheel.
export var zoom_factor := 0.1
# Duration of the zoom's tween animation.
export var zoom_duration := 0.2

# The camera's target zoom level.
var _zoom_level := 1.0 setget _set_zoom_level

# We store a reference to the scene's tween node.
onready var tween: Tween = $Tween
```

Let's look at `_zoom_level`'s setter function next. We use it to trigger the tween animation and smoothly zoom in and out.

```gdscript
func _set_zoom_level(value: float) -> void:
	# We limit the value between `min_zoom` and `max_zoom`
	_zoom_level = clamp(value, min_zoom, max_zoom)
	# Then, we ask the tween node to animate the camera's `zoom` property from its current value
	# to the target zoom level.
	tween.interpolate_property(
		self,
		"zoom",
		zoom,
		Vector2(_zoom_level, _zoom_level),
		zoom_duration,
		tween.TRANS_SINE,
		# Easing out means we start fast and slow down as we reach the target value.
		tween.EASE_OUT
	)
	tween.start()
```

Finally, we use the `_unhandled_input()` callback to update the camera's zoom level, using the input actions defined earlier. Notice how the `Camera2D.zoom` value zooms in when it becomes smaller and zooms out when it increases.

```gdscript
func _unhandled_input(event):
	if event.is_action_pressed("zoom_in"):
		# Inside a given class, we need to either write `self._zoom_level = ...` or explicitly
		# call the setter function to use it.
		_set_zoom_level(_zoom_level - zoom_factor)
	if event.is_action_pressed("zoom_out"):
		_set_zoom_level(_zoom_level + zoom_factor)
```

* Using two areas2D to indicate to the camera if the player is inside one of them or not.
* Using a method to get near a point and reaching a radius slow down the approximation speed. It's not fundamental to the tut but I think it's a good extra.

# Anchor the camera from the player to fixed points

Example of a gameplay that justifies this. When a player enters in an area with a boss fight the camera goes from centered in the player to the center of the screen.

VIDEO: animated example

You can find the full project [here](https://github.com/GDQuest/godot-mini-tuts-demos/tree/master/2d/anchor-camera).

You will learn to:

* Change the anchor and the zoom of the camera when the player enters in a specific part of the map.
* Interpolate the camera position from between different anchor points.

## Main components

*I don't know if it is better to use the name of the nodes here or a more common name (I'll use the same as title in its corresponding section)*
**Anchor2D.** Area2D instantiated in the game scene. If the player enters in this area the camera should change its anchor point to the center of the _Anchor2D_ area. This node also has a property which indicates the _zoom_level_ of the camera.
**AnchorDetector2D.** The player has this _Area2D_ node as a child. It is intended to detect when the player enters of goes out in an _Anchor2D_. It should notify through signals these events to the _AnchorCamera2D_.
**AnchorCamera2D.** Camara2D node which is a child of the player. This node is in charge of changing the camera anchor and zoom level in function of the received signals from the player. It presents methods to do so in a smooth way.
**Player.** _KinematicBody2D_ node to which represents the player of the demo. It has _AnchorDetector2D_ and _AnchorCamera2D_ as children.

### Collision layers

Presents the collision layers used with an image.

## Anchor2D

Scene description (it includes an optional sprite to show the limits of the anchor area).

Briefly explain monitoring and monitorable and show with an image the selected collision layer.

Code with a minor comment in the zoom line

```gdscript
class_name Anchor2D
extends Area2D

export var zoom_level := 1.0
```

## AnchorDetector2D

General scene description and an image of the selected collision mask and monitoring enabled.

It will detect when it enters or goes out of an area in the third layer, i.e. the layer associated with anchors. Show with an image the connection of these signals.

When it does so it will emit the signal _anchor_detected_ or _anchor_detached_ that will be received by the _AnchorCamera2D_. Show with an image the connection of these signals from the scene of the player (in order to connect them with the cammera).

Code with comments

```gdscript
extends Area2D

signal anchor_detected(anchor)
signal anchor_detached


func _on_area_entered(area: Anchor2D) -> void:
	emit_signal("anchor_detected", area)


func _on_area_exited(area: Anchor2D) -> void:
	var areas: Array = get_overlapping_areas()
	if get_overlapping_areas().size() == 1 and area == areas[0]:
		emit_signal("anchor_detached")
```

## AnchorCamera2D

General scene description and an image of the current enabled. **size of the anchor to fit the player**

General behavior of the camera (brief explanation as the reader can read the comments in the code):

* It should move independently from his parent
* Approach the new anchor with a maximum speed and reducing this one when it gets closer to a certain radius to this target point.
* The position of the new anchor is received with the _anchor_detected_ signal.
* The anchor will return to the player when the _AnchorCamera2D_ receives the _anchor_detached_ signal
* The change in zoom and anchor point is smoothen using _update_zoom_ and _arrive_to_ methods

Code with comments

```gdscript
class_name AnchorCamera2D
extends Camera2D

const SLOW_RADIUS := 300.0

export var tween_duration := 0.5
export var max_speed := 2000.0

var _velocity = Vector2.ZERO
var _anchor_position := Vector2.ZERO
var _target_zoom := 1.0


func _ready() -> void:
	set_as_toplevel(true)


func _physics_process(delta: float) -> void:
	update_zoom()

	# Arrive steering behavior
	var target_position: Vector2 = (
		owner.global_position
		if _anchor_position.is_equal_approx(Vector2.ZERO)
		else _anchor_position
	)
	arrive_to(target_position)


func _on_AnchorDetector2D_anchor_detected(anchor: Anchor2D) -> void:
	_anchor_position = anchor.global_position
	_target_zoom = anchor.zoom_level


func _on_AnchorDetector2D_anchor_detached() -> void:
	_anchor_position = Vector2.ZERO
	_target_zoom = 1.0
```

### Coding the zoom and anchor point change smoothly

Brief introduction to this code with comments

```gdscript
func update_zoom() -> void:
	if not is_equal_approx(zoom.x, _target_zoom):
		var new_zoom_level: float = lerp(
			zoom.x, _target_zoom, 1.0 - pow(0.008, get_physics_process_delta_time())
		)
		zoom = Vector2(new_zoom_level, new_zoom_level)
```

Faster when it's further away from the target point and much slower when it's in the _SLOW_RADIUS_ distance.
Code with comments

```gdscript
func arrive_to(target_position: Vector2) -> void:
	var distance_to_target := position.distance_to(target_position)
	var desired_velocity := (target_position - position).normalized() * max_speed * zoom.x
	if distance_to_target < SLOW_RADIUS * zoom.x:
		desired_velocity *= (distance_to_target / (SLOW_RADIUS * zoom.x))

	_velocity += desired_velocity - _velocity
	position += _velocity * get_physics_process_delta_time()
```

## Player

Repeat the same as in the zoom demo but instanciating AchorCamera and AnchorDetector.
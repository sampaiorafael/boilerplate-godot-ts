shader_type canvas_item;

uniform vec3 tint;

void fragment() {
	COLOR = texture(SCREEN_TEXTURE, SCREEN_UV);
	COLOR.rgb = vec3(COLOR.r + COLOR.g + COLOR.b) / 3.0;
	COLOR.rgb = (COLOR.rgb + tint.rgb) / 2.0;
}
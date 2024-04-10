import tensorflow as tf
import numpy as np

#celsius to fahrenheit
celsius = np.array([1, -10, 0, 21, 13, 23, 50, -30], dtype=float)
fahrenheit = np.array([33.8, 14, 32, 69.8, 55.4, 73.4, 122, -22], dtype=float)

#layers
layer = tf.keras.layers.Dense(units=1, input_shape=[1])
model = tf.keras.Sequential([layer])

#compile with the adam optimizer
model.compile(
    optimizer=tf.keras.optimizers.Adam(0.1),
    loss='mean_squared_error'
)
import tensorflow as tf
import tensorflow_datasets as tfds
import matplotlib.pyplot as plt

#load data
data, meta_data = tfds.load('fashion_mnist', as_supervised=True, with_info=True)

#classification
training_data, test_data = data['train'], data['test']
class_name = meta_data.features["label"].names

#normalize data 
def normalize_data(img, tag):
    img = tf.cast(img, tf.float32)
    img /= 255
    return img, tag

training_data = training_data.map(normalize_data)
test_data = test_data.map(normalize_data)
#cache 
training_data = training_data.cache()
test_data = test_data.cache()

for img, tag in training_data.take(1):
    break
img = img.numpy().reshape((28, 28))

plt.figure()
plt.imshow(img, cmap=plt.cm.binary)
plt.colorbar()
plt.grid(False)
plt.show()


plt.figure(figsize=(10,10))

for i, (img, tag) in enumerate(training_data.take(25)):
    break
img = img.numpy().reshape((28, 28))
plt.subplot(5,5, i+1)
plt.xtricks([])
plt.ytricks([])
plt.grid(False)
plt.imshow(img, cmap=plt.cm.binary)
plt.xlabel(class_name[tag])
plt.show()
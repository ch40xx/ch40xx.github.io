---
title: Linear Regression
date: 2026-01-08 
slug: lin-reg
desc: The notes i made during my machine learning crash course.
quote: CRASHING THE LEARNING MACHINE.
---

# Linear Regression:

A Statistical Technique: To find the relationship between variables i.e. features and labels.

##### Equation
In __algeabric__ terms:
the model has a defintion of y = mx + b.
Where,
    y = the label/value we want to predict
    x = the feature/input we are relying to get the relation
    
    m = the slope of the line
    b = y-intercept of the line.

In __machine learning__ terms:

we write it as, y' = b + wn * xn.

where,  
    y' = is the predicted value/label - Output
    b = bias of the model [if using a grad-desc a random value is intialized at first]
    wn = the weight of the input value [if using a grad-desc a random value is initalized at first]
    xn = the input is the feature.

- Note: the 'n' represents if there are multiple feature to be included and ought to contribute in order to get a relationship for the label.

w = is the slope for a single feature-label relationship so we compute it by using the slope calculation formula from  statistics.
w = sum of (x - meanof(x)) * sum of (y - meanof(y)) / squared sum of (x - meanof(x))
then 
 b is calculated as b = mean of y - w. mean of x

The 'b' and 'wn' is calculated-updated throughout during training in order to minimize the loss which matches the desired precition. This leads to finding THE most suitable equation **(mathematical relationship)** the features and the label have.
 We cannot tamper with the input and the ouput is just there a product of operations perfomed on the input. The only variables we can update will be weights and biases. weight can be imagined as the force of the input that it has on the neuron and the bias can be imagined as the overall happiness the neuron gets when it goes throug the input simluation. An activation function is used to limit the ouput or for different purpose but here in linear regression the activation function is an identity so it doesnt change the output.


- A MODEL WITH MULTIPLE FEATURES IS THE SAME BUT JUST HAS MORE INPUTS LEADING TO USE OF MORE WEIGHTS THAT NEED TO BE ASSIGNED TO THE INPUT FOR THE NEURON.
which is: y'= b + w1.x1 + w2.x2 + w3.x3 + .... + wn.xn 

## Loss: [Linear Regression]

Loss is a numerical metric that describes how wrong a model's predictions are.In linear regression, Loss measures the distance between models prediction and the actual labels. The goal of training a model is to minimize the loss, reducting it to its lowest possible value.

### Distance of the loss :
In linear reg the loss is focused for the distance not the direction. 
And in order to remove the sign(+/-) for the distance we can use two diffrent methods that are
1. Take the absolute value
2. Take the squared value.

This leads us with types of loses; 4 of the kind
#### L1 Loss - Sum of absolute values of the differences
#### MAE Loss - L1/number of datas/examples taken [Mean ABSOLUTE ERROR]
#### L2 Loss - sum of squared differences
#### MSE Loss - L2/number of datas/examples taken [ MEAN SQUARED ERROR] 

> [!NOTE]
> an RMSE Loss is a Root mean squared error which is the square root of MSE.

> [!NOTE]
> Loss metrics like MAE and RMSE mayeb preferable to L2,MSE as they tend to be more human interpretable measuring terorr using the same scale asn teh model's predicted value.
> When processing multiple examples at once using MSE,MAE or RMSE will be a better choice.

### Chosing a Loss:
    - Deciding Whereter to use MAE or MSE can depend on the dataset and teh way you want to handle certain predictions.

The data in the dataset typically range witing certain values. anything out of the range maybe considered and outlier depending on the data and the situaion.

In linear regression **the chosing of the loss function is how i want the model to treat the outliers.**
For example MSE moves the model more towards the outliers , while MAE doesn't.
L2 is more affected penalty wise than L1 when there is an outlier present.

While visualizing the image below you can get a clearer picture.
__images from google__
![MSE Trained Model](https://developers.google.com/static/machine-learning/crash-course/linear-regression/images/model-mse.png "MSE Trained Line")
Here the image show the line is more tilted and considers the outliers to make the best fit line.
![MAE Trained Model](https://developers.google.com/static/machine-learning/crash-course/linear-regression/images/model-mae.png "MAE Trained Line")
 Here the image shows the line kinda ignores the outliers and is worried more about the best fit line for the data that are in the range.

## Gradient Descent:
It is a mathecmatical tencuiqte that itereatively find the weights and bias that produce the model with lowest loss.
    Gradient descent find the best weight and the bias by repeting the follwing process a number of times. 

- the model beigns training with randomized weights and biases near zero and then repeasts the following stepsL:

1. Calculate the loss with the current weight and bias.
2. determine the direction to move the weights and bias that reduce loss.
3. move the weight and bias values a small amount in the direction that reduces loss.
4. return to step one and repeat the process until the mnodel cant redue any the loss further.

## Model Convergence and Loss Curves
When trainining we will often look at the loss curce to determine if the model has converged.
Clearer with visual examples but you can see a the curve flattening out as the loss starts to get closer and closer to zero.

> [!NOTE]
> The loss function for linear models always produce a convex surface. as a result of this property, when a linear regression model converges we know the model has found the weights and bias that produces the lowest loss.


## Hyperparameters

Hyperparameters are the vairbale that control differenct aspects of training. Three common hyperparameters are:
1. Learning Rate
2. Batch Size
3. Epochs

In contrast, parameters are het variable, like the weights and bias that are the part of the model itself.
[hyperparameters are the variables i control for the model, parameters are the value the model controls for itself]

1. Learning Rate:
    Learning rate is the size of how much the model moves in the direction negative to the gradient in order to reduce the loss. Highly related to the convergence.
    High learning rate may lead to model never converging and moving here and there  and low learning may lead to somethign like very long convering time. 
    Very problem dependent.

2. Batch Size:
    Batch size is a lso a hyperparamter that refers to the number of examples the model processes before updating its weights and bias. 
    In a very large dataset it would be very tedious and time consuming as well as very inefficient to update weights and bias after comuputing each example.
    So batch sizes are used; once the number hits the batch size then only the loss is calcualted to update weights and biases.

    The two common technquies to update batch sizes are:
    i. Stochastic gradient Descent: It uses only a single example per iteration. Given enought iteration, sdg works but very noisey.
        *noise* refers to the variation during training that cuase the loss tyo increase thatn to decrease during an iteration.
        The term __stochastic__ indicated that the one example comprising each batch is chose at random.

    ii. Mini-Batch Stochastic Gradient Descent: It comprises of data examples that numebr between full batch and SDG(1). The model chooses tehe examples incuded in each batch at random, averages the gradients, and then updates the weights and bias. once per the designated number of example is processed defined initially.

3. Epochs:
    During training, an epoch means that the model has processed every single example in the training set for once. For instance if we take a dataset that has 500 toatl examples and we take a mini batch size of 50. each 50 examples 1 batch is completed and it will take 10 batches to complete 1 epoch which mean by 10 times of 50 batches of updating the w and b's an epoch is completed. 



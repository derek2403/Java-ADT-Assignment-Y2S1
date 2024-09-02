package com.charitymanagement.adt;

import java.util.Arrays;

public class List<T> {
    private static final int INITIAL_CAPACITY = 10;
    private T[] elements;
    private int size = 0;

    @SuppressWarnings("unchecked")
    public List() {
        elements = (T[]) new Object[INITIAL_CAPACITY];
    }

    public void add(T element) {
        if (size == elements.length) {
            resize();
        }
        elements[size++] = element;
    }

    public T get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        return elements[index];
    }

    public boolean remove(T element) {
        for (int i = 0; i < size; i++) {
            if (elements[i].equals(element)) {
                for (int j = i; j < size - 1; j++) {
                    elements[j] = elements[j + 1];
                }
                elements[--size] = null; // Clear the last element
                return true;
            }
        }
        return false;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    private void resize() {
        elements = Arrays.copyOf(elements, elements.length * 2);
    }

    public T[] toArray() {
        return Arrays.copyOf(elements, size);
    }
}

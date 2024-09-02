package com.charitymanagement.adt;

public interface Array<E> {
    void add(E element);
    E get(int index);
    void set(int index, E element);
    void remove(E element);
    int size();
    boolean isEmpty();
    void clear();
    boolean contains(E element);
}
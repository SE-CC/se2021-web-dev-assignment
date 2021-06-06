package com.sp.model;

public class WraType<T> {
    public T value;

    public WraType(T value) {
        this.value = value;
    }

    public WraType() {
        this.value = null;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}

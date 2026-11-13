# Usage

Add a job with `enqueue`. Two jobs run at once, and the rest wait their turn.

A job that fails is tried again, up to three times, a second apart.
